import { AlertDialog, Button } from "@shared-ui-library/react";
import { useState } from "react";
import { ComponentPage, ShowcaseSection } from "../components/ComponentPage";

export function AlertDialogPage() {
  const [open, setOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);

  return (
    <ComponentPage
      title="Alert Dialog"
      description="A modal dialog that interrupts the user with important content and expects a response."
    >
      <ShowcaseSection title="Default">
        <Button onClick={() => setOpen(true)}>Open Alert Dialog</Button>
        <AlertDialog
          open={open}
          onClose={() => setOpen(false)}
          title="Are you sure?"
          description="This action cannot be undone."
          actions={
            <>
              <Button onClick={() => setOpen(false)}>Cancel</Button>
              <Button
                variant="primary"
                onClick={() => {
                  console.log("Confirmed");
                  setOpen(false);
                }}
              >
                Confirm
              </Button>
            </>
          }
        />
      </ShowcaseSection>

      <ShowcaseSection title="Destructive">
        <Button variant="error" onClick={() => setConfirmOpen(true)}>
          Delete Account
        </Button>
        <AlertDialog
          open={confirmOpen}
          onClose={() => setConfirmOpen(false)}
          title="Delete Account"
          description="Are you sure you want to delete your account? This action is permanent and cannot be reversed."
          actions={
            <>
              <Button onClick={() => setConfirmOpen(false)}>Cancel</Button>
              <Button
                variant="error"
                onClick={() => {
                  console.log("Deleted");
                  setConfirmOpen(false);
                }}
              >
                Delete
              </Button>
            </>
          }
        />
      </ShowcaseSection>
    </ComponentPage>
  );
}
