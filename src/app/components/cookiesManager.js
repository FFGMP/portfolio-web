'use server';

import { cookies } from 'next/headers';

function setThemeCookie(localStorageTheme) {
    cookies().set("theme", localStorageTheme);
}

function getThemeCookie() {
    return cookies().get("theme");
}

export { setThemeCookie, getThemeCookie };
