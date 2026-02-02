import {
  Button,
  Dialog,
  DialogActions,
  DialogDescription,
  DialogTitle,
} from "@shared-ui-library/react";
import { useState } from "react";
import { ComponentPage, ShowcaseSection } from "../components/ComponentPage";

export function DialogPage() {
  const [basicOpen, setBasicOpen] = useState(false);
  const [topOpen, setTopOpen] = useState(false);
  const [bottomOpen, setBottomOpen] = useState(false);
  const [closeButtonOpen, setCloseButtonOpen] = useState(false);
  const [startOpen, setStartOpen] = useState(false);
  const [endOpen, setEndOpen] = useState(false);
  const [responsiveOpen, setResponsiveOpen] = useState(false);
  const [largeOpen, setLargeOpen] = useState(false);
  const [noOutsideClose, setNoOutsideClose] = useState(false);
  const [fullOpen, setFullOpen] = useState(false);

  return (
    <ComponentPage
      title="Dialog"
      description="A modal dialog box that appears on top of the main content."
    >
      {/* Basic Usage with sub-components */}
      <ShowcaseSection title="Basic Usage (with sub-components)">
        <Button onClick={() => setBasicOpen(true)}>Open Dialog</Button>
        <Dialog open={basicOpen} onClose={() => setBasicOpen(false)}>
          <DialogTitle>Dialog Title</DialogTitle>
          <DialogDescription>
            This is the dialog content using the new sub-components. You can put
            any content here.
          </DialogDescription>
          <DialogActions>
            <Button onClick={() => setBasicOpen(false)}>Close</Button>
            <Button variant="primary" onClick={() => setBasicOpen(false)}>
              Confirm
            </Button>
          </DialogActions>
        </Dialog>
      </ShowcaseSection>

      {/* Close Button in Corner */}
      <ShowcaseSection title="With Close Button">
        <Button variant="primary" onClick={() => setCloseButtonOpen(true)}>
          Open Dialog with Close Button
        </Button>
        <Dialog
          open={closeButtonOpen}
          onClose={() => setCloseButtonOpen(false)}
          showCloseButton
        >
          <DialogTitle>Dialog with Close Button</DialogTitle>
          <DialogDescription>
            This dialog has a close button in the top-right corner. Click it or
            press Escape to close.
          </DialogDescription>
          <DialogActions>
            <Button variant="primary" onClick={() => setCloseButtonOpen(false)}>
              Got it!
            </Button>
          </DialogActions>
        </Dialog>
      </ShowcaseSection>

      {/* Vertical Positions */}
      <ShowcaseSection title="Vertical Positions">
        <div className="flex gap-2 flex-wrap">
          <Button variant="secondary" onClick={() => setTopOpen(true)}>
            Top Position
          </Button>
          <Button variant="secondary" onClick={() => setBasicOpen(true)}>
            Middle Position (default)
          </Button>
          <Button variant="secondary" onClick={() => setBottomOpen(true)}>
            Bottom Position
          </Button>
        </div>
        <Dialog
          open={topOpen}
          onClose={() => setTopOpen(false)}
          position="top"
          showCloseButton
        >
          <DialogTitle>Top Dialog</DialogTitle>
          <DialogDescription>
            This dialog appears at the top of the screen.
          </DialogDescription>
          <DialogActions>
            <Button variant="primary" onClick={() => setTopOpen(false)}>
              Confirm
            </Button>
          </DialogActions>
        </Dialog>
        <Dialog
          open={bottomOpen}
          onClose={() => setBottomOpen(false)}
          position="bottom"
          showCloseButton
        >
          <DialogTitle>Bottom Dialog</DialogTitle>
          <DialogDescription>
            This dialog appears at the bottom of the screen.
          </DialogDescription>
          <DialogActions>
            <Button variant="secondary" onClick={() => setBottomOpen(false)}>
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </ShowcaseSection>

      {/* Horizontal Positions */}
      <ShowcaseSection title="Horizontal Positions">
        <div className="flex gap-2 flex-wrap">
          <Button variant="accent" onClick={() => setStartOpen(true)}>
            Start Position
          </Button>
          <Button variant="accent" onClick={() => setEndOpen(true)}>
            End Position
          </Button>
        </div>
        <Dialog
          open={startOpen}
          onClose={() => setStartOpen(false)}
          horizontalPosition="start"
          showCloseButton
        >
          <DialogTitle>Start Position Dialog</DialogTitle>
          <DialogDescription>
            This dialog is aligned to the start (left) of the screen.
          </DialogDescription>
          <DialogActions>
            <Button onClick={() => setStartOpen(false)}>Close</Button>
          </DialogActions>
        </Dialog>
        <Dialog
          open={endOpen}
          onClose={() => setEndOpen(false)}
          horizontalPosition="end"
          showCloseButton
        >
          <DialogTitle>End Position Dialog</DialogTitle>
          <DialogDescription>
            This dialog is aligned to the end (right) of the screen.
          </DialogDescription>
          <DialogActions>
            <Button onClick={() => setEndOpen(false)}>Close</Button>
          </DialogActions>
        </Dialog>
      </ShowcaseSection>

      {/* Responsive */}
      <ShowcaseSection title="Responsive (Bottom on Mobile)">
        <Button variant="info" onClick={() => setResponsiveOpen(true)}>
          Open Responsive Dialog
        </Button>
        <Dialog
          open={responsiveOpen}
          onClose={() => setResponsiveOpen(false)}
          responsive
          showCloseButton
        >
          <DialogTitle>Responsive Dialog</DialogTitle>
          <DialogDescription>
            This dialog appears at the bottom on mobile screens and in the
            middle on larger screens. Try resizing your browser!
          </DialogDescription>
          <DialogActions>
            <Button variant="info" onClick={() => setResponsiveOpen(false)}>
              Got it!
            </Button>
          </DialogActions>
        </Dialog>
      </ShowcaseSection>

      {/* Custom Size */}
      <ShowcaseSection title="Custom Sizes">
        <div className="flex gap-2 flex-wrap">
          <Button variant="success" onClick={() => setLargeOpen(true)}>
            Extra Large Dialog
          </Button>
          <Button variant="warning" onClick={() => setFullOpen(true)}>
            Full Screen Dialog
          </Button>
        </div>
        <Dialog
          open={largeOpen}
          onClose={() => setLargeOpen(false)}
          size="xl"
          showCloseButton
        >
          <DialogTitle>Extra Large Dialog</DialogTitle>
          <DialogDescription>
            This dialog uses the "xl" size preset for a wider modal. You can
            also use "xs", "sm", "md", "lg", or provide a custom maxWidth class.
          </DialogDescription>
          <div className="py-4">
            <div className="bg-base-200 p-4 rounded-lg">
              <p>
                This extra space can be used for forms, tables, or other
                content.
              </p>
            </div>
          </div>
          <DialogActions>
            <Button onClick={() => setLargeOpen(false)}>Cancel</Button>
            <Button variant="success" onClick={() => setLargeOpen(false)}>
              Save Changes
            </Button>
          </DialogActions>
        </Dialog>
        <Dialog
          open={fullOpen}
          onClose={() => setFullOpen(false)}
          size="full"
          showCloseButton
        >
          <DialogTitle>Full Screen Dialog</DialogTitle>
          <DialogDescription>
            This dialog takes up the entire screen. Great for complex forms or
            immersive experiences.
          </DialogDescription>
          <div className="flex-1 py-4">
            <div className="bg-base-200 p-4 rounded-lg h-full min-h-[200px] flex items-center justify-center">
              <p>Full screen content area</p>
            </div>
          </div>
          <DialogActions>
            <Button variant="warning" onClick={() => setFullOpen(false)}>
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </ShowcaseSection>

      {/* No Close on Outside Click */}
      <ShowcaseSection title="Disable Close on Outside Click">
        <Button variant="error" onClick={() => setNoOutsideClose(true)}>
          Open Persistent Dialog
        </Button>
        <Dialog
          open={noOutsideClose}
          onClose={() => setNoOutsideClose(false)}
          closeOnClickOutside={false}
          showCloseButton
        >
          <DialogTitle>Persistent Dialog</DialogTitle>
          <DialogDescription>
            This dialog won't close when clicking outside. You must use the
            close button or press Escape.
          </DialogDescription>
          <DialogActions>
            <Button variant="error" onClick={() => setNoOutsideClose(false)}>
              I understand
            </Button>
          </DialogActions>
        </Dialog>
      </ShowcaseSection>
    </ComponentPage>
  );
}
