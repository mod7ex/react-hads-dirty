import { Alert, type AlertProps } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../store";
import { uiActions } from "../store/ui-slice";

export default function Notification({ type, message }: { type: AlertProps["severity"]; message: string }) {
  const { open } = useAppSelector((s) => s.ui.notification);

  const dispatch = useAppDispatch();

  return (
    <div>
      {open && (
        <Alert severity={type} onClose={() => dispatch(uiActions.notify({ open: false }))}>
          {message}
        </Alert>
      )}
    </div>
  );
}
