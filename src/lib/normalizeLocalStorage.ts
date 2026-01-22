// Normalize global localStorage on the server when it's present but not functional.
// This file is safe to import on both server and client. It only runs the patch on server.

if (typeof window === "undefined") {
  try {
    const gs: any = globalThis as any;
    if (typeof gs.localStorage !== "undefined") {
      const ls = gs.localStorage;
      const hasValidGet = ls && typeof ls.getItem === "function";
      const hasValidSet = ls && typeof ls.setItem === "function";
      const hasValidRemove = ls && typeof ls.removeItem === "function";
      if (!(hasValidGet && hasValidSet && hasValidRemove)) {
        // Replace with a noop implementation so server-side code that calls
        // localStorage.getItem won't throw a TypeError.
        gs.localStorage = {
          getItem: (/* key: string */) => null,
          setItem: (/* key: string, value: string */) => undefined,
          removeItem: (/* key: string */) => undefined,
        };
      }
    }
  } catch (e) {
    // Silently ignore any errors while trying to patch global.
  }
}
