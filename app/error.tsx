'use client';

import { PermissionDeniedError } from "./demo/PermissionDeniedError";

export default function ErrorPage({ error }: { error: Error }) {
  return (
    <html>
    <body>
    <div>
      <h1>Something went wrong....</h1>
      <div>Oops, an unexpected error: {error.message}</div>
      <ul>
        <li><code>error: {JSON.stringify(error)}</code></li>
        <li><code>error.name: {error.name}</code></li>
        <li><code>error.message: {error.message}</code></li>
      </ul>
      <ul>
        <li><code>error instanceof Error: {error instanceof Error ? 'true' : 'false'}</code></li>
        <li><code>error instanceof PermissionDeniedError: {error instanceof PermissionDeniedError ? 'true' : 'false'}</code></li>
      </ul>
    </div>
    </body>
    </html>
  );
}
