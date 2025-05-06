import { CFP_COOKIE_MAX_AGE } from './constants';
import { sha256, getCookieKeyValue } from './utils';

export async function onRequestPost(context: {
  request: Request;
  env: { CFP_PASSWORD?: string };
}): Promise<Response> {
  const { request, env } = context;
  const body = await request.formData();
  const { password: submittedPassword, redirect } = Object.fromEntries(body);

  const configuredPassword = env.CFP_PASSWORD;

  if (!configuredPassword) {
    // If no server-side password is configured, all login attempts are invalid.
    // Redirect to login page with error, similar to incorrect password.
    // Consider a specific error message or logging for this case.
    const redirectPath = (redirect && redirect.toString()) || '/';
    return new Response('', {
      status: 302,
      headers: {
        'Cache-Control': 'no-cache',
        Location: `${redirectPath}?error=1`, // Or a more specific error
      },
    });
  }

  const hashedSubmittedPassword = await sha256(submittedPassword.toString());
  const hashedCfpPassword = await sha256(configuredPassword);

  if (hashedSubmittedPassword === hashedCfpPassword) {
    // Valid password. Redirect to home page and set cookie with auth hash.
    const cookieKeyValue = await getCookieKeyValue(configuredPassword);
    const redirectPath = (redirect && redirect.toString()) || '/';

    return new Response('', {
      status: 302,
      headers: {
        'Set-Cookie': `${cookieKeyValue}; Max-Age=${CFP_COOKIE_MAX_AGE}; Path=/; HttpOnly; Secure`,
        'Cache-Control': 'no-cache',
        Location: redirectPath
      }
    });
  } else {
    // Invalid password. Redirect to login page with error.
    const redirectPath = (redirect && redirect.toString()) || '/';
    return new Response('', {
      status: 302,
      headers: {
        'Cache-Control': 'no-cache',
        Location: `${redirectPath}?error=1`,
      },
    });
  }
}
