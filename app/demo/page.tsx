import {PermissionDeniedError} from "./PermissionDeniedError";

export default function Page() {
  throw new PermissionDeniedError('Custom error');
}
