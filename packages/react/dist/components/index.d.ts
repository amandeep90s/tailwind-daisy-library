import * as React from 'react';
import React__default from 'react';
import { Control } from 'react-hook-form';
import * as react_jsx_runtime from 'react/jsx-runtime';
import '@shared-ui-library/tokens';

type AmountFieldVariant = "bordered" | "ghost" | "floating";
type AmountFieldColor = "default" | "neutral" | "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "error";
type AmountFieldSize = "xs" | "sm" | "md" | "lg" | "xl";
interface AmountFieldProps extends Omit<React__default.InputHTMLAttributes<HTMLInputElement>, "size" | "type" | "onChange" | "value"> {
    /** Style variant of the input */
    variant?: AmountFieldVariant;
    /** Color variant of the input */
    color?: AmountFieldColor;
    /** Size of the input */
    size?: AmountFieldSize;
    /** Label text displayed above the input */
    label?: string;
    /** Error message displayed below the input */
    error?: string;
    /** Helper text displayed below the input */
    helperText?: string;
    /** Value as a number or string */
    value?: number | string | null;
    /** Callback when value changes, returns number or string based on valueAsString prop */
    onChange?: (value: number | string | null) => void;
    /** Currency symbol to display (default: $) */
    currencySymbol?: string;
    /** Maximum decimal places (default: 2) */
    decimalPlaces?: number;
    /** Whether to allow negative amounts */
    allowNegative?: boolean;
    /** Maximum amount allowed */
    max?: number;
    /** Minimum amount allowed */
    min?: number;
    /** When true, onChange returns string value instead of number */
    valueAsString?: boolean;
}
/**
 * AmountField component for USD currency input with DaisyUI styling
 * Automatically formats amounts with commas and decimal places
 *
 * @example
 * ```tsx
 * <AmountField
 *   label="Price"
 *   value={1000.50}
 *   onChange={(value) => console.log(value)}
 * />
 * ```
 */
declare const AmountField: React__default.ForwardRefExoticComponent<AmountFieldProps & React__default.RefAttributes<HTMLInputElement>>;

type ButtonVariant = "default" | "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "error" | "ghost" | "link" | "outline";
type ButtonSize = "xs" | "sm" | "md" | "lg";
type ButtonShape = "default" | "wide" | "block" | "circle" | "square";
/**
 * Props for the Link component passed to the `as` prop.
 * Compatible with react-router-dom Link, Next.js Link, etc.
 */
interface LinkComponentProps {
    to: string;
    className?: string;
    children?: React__default.ReactNode;
    "aria-disabled"?: boolean;
    tabIndex?: number;
    onClick?: (e: React__default.MouseEvent) => void;
}
interface BaseButtonProps {
    /** Color variant of the button */
    variant?: ButtonVariant;
    /** Size of the button */
    size?: ButtonSize;
    /** Shape of the button */
    shape?: ButtonShape;
    /** Show loading spinner */
    loading?: boolean;
    /** Active state */
    active?: boolean;
    /** Glass effect */
    glass?: boolean;
    /** Disable animation */
    noAnimation?: boolean;
    /** Additional CSS classes */
    className?: string;
    /** Children elements */
    children?: React__default.ReactNode;
}
interface ButtonAsButtonProps extends BaseButtonProps, Omit<React__default.ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseButtonProps> {
    /** Render as a button element (default) */
    as?: "button";
}
interface ButtonAsLinkProps extends BaseButtonProps {
    /**
     * Render as a Link component for navigation.
     * Pass a Link component from react-router-dom or similar.
     * @example
     * import { Link } from 'react-router-dom';
     * <Button as={Link} to="/dashboard">Dashboard</Button>
     */
    as: React__default.ComponentType<LinkComponentProps>;
    /** The URL path to navigate to (required when using `as` prop) */
    to: string;
}
type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;
/**
 * Button component with DaisyUI styling.
 * Can be rendered as a button or as a Link component for navigation.
 *
 * @example
 * ```tsx
 * // As a button (default)
 * <Button variant="primary" size="md">Click me</Button>
 * <Button variant="secondary" loading>Loading...</Button>
 * <Button variant="ghost" shape="circle">X</Button>
 *
 * // As a Link (for navigation)
 * import { Link } from 'react-router-dom';
 * <Button as={Link} to="/dashboard" variant="primary">Dashboard</Button>
 * ```
 */
declare const Button: React__default.ForwardRefExoticComponent<ButtonProps & React__default.RefAttributes<HTMLButtonElement | HTMLAnchorElement>>;

type InputVariant = "bordered" | "ghost" | "floating";
type InputColor = "default" | "neutral" | "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "error";
type InputSize = "xs" | "sm" | "md" | "lg" | "xl";
interface InputProps extends Omit<React__default.InputHTMLAttributes<HTMLInputElement>, "size"> {
    /** Style variant of the input */
    variant?: InputVariant;
    /** Color variant of the input */
    color?: InputColor;
    /** Size of the input */
    size?: InputSize;
    /** Label text displayed above the input */
    label?: string;
    /** Error message displayed below the input */
    error?: string;
    /** Helper text displayed below the input */
    helperText?: string;
    /** Icon or element to display at the start (left) of the input */
    startIcon?: React__default.ReactNode;
    /** Icon or element to display at the end (right) of the input */
    endIcon?: React__default.ReactNode;
    /** Whether to use the wrapper style (input class on container) */
    wrapperStyle?: boolean;
}
/**
 * Input component with DaisyUI styling
 *
 * @example
 * ```tsx
 * <Input placeholder="Enter text" />
 * <Input label="Email" type="email" />
 * <Input label="Password" error="Invalid password" />
 * <Input startIcon={<SearchIcon />} placeholder="Search..." />
 * ```
 */
declare const Input: React__default.ForwardRefExoticComponent<InputProps & React__default.RefAttributes<HTMLInputElement>>;

interface LabelProps extends React__default.LabelHTMLAttributes<HTMLLabelElement> {
    /** The content of the label */
    children: React__default.ReactNode;
    /** Whether this label is required (shows asterisk) */
    required?: boolean;
    /** Alternative/helper text style */
    alt?: boolean;
}
/**
 * Label component with DaisyUI styling
 *
 * @example
 * ```tsx
 * <Label>Username</Label>
 * <Label required>Email</Label>
 * <Label alt>Optional field</Label>
 * ```
 */
declare const Label: React__default.ForwardRefExoticComponent<LabelProps & React__default.RefAttributes<HTMLLabelElement>>;

type AccordionVariant = "default" | "plus" | "arrow";
type AccordionIconPosition = "left" | "right";
interface AccordionProps extends React__default.HTMLAttributes<HTMLDivElement> {
    /** Visual style variant */
    variant?: AccordionVariant;
    /** Whether the accordion is open by default */
    defaultOpen?: boolean;
    /** Controlled open state */
    open?: boolean;
    /** Callback when open state changes */
    onOpenChange?: (open: boolean) => void;
}
interface AccordionItemProps extends Omit<React__default.HTMLAttributes<HTMLDivElement>, "title"> {
    /** Title/summary content */
    title: React__default.ReactNode;
    /** Whether this item is open */
    open?: boolean;
    /** Default open state (uncontrolled) */
    defaultOpen?: boolean;
    /** Callback when open state changes */
    onOpenChange?: (open: boolean) => void;
    /** Variant style */
    variant?: AccordionVariant;
    /** Position of the accordion icon */
    iconPosition?: AccordionIconPosition;
    /** Action elements (buttons, icons) to display on the right side */
    actions?: React__default.ReactNode;
}
/**
 * Accordion component with DaisyUI styling
 *
 * @example
 * ```tsx
 * <Accordion variant="arrow">
 *   <AccordionItem title="Section 1" iconPosition="right" actions={<button>Edit</button>}>
 *     Content 1
 *   </AccordionItem>
 *   <AccordionItem title="Section 2">Content 2</AccordionItem>
 * </Accordion>
 * ```
 */
declare const Accordion: React__default.ForwardRefExoticComponent<AccordionProps & React__default.RefAttributes<HTMLDivElement>>;
/**
 * AccordionItem component with customizable icon position and action slots
 *
 * @example
 * ```tsx
 * <AccordionItem
 *   title="Jack Jonas"
 *   iconPosition="right"
 *   actions={
 *     <>
 *       <button onClick={() => console.log('edit')}>Edit</button>
 *       <button onClick={() => console.log('delete')}>Delete</button>
 *     </>
 *   }
 * >
 *   Content here
 * </AccordionItem>
 * ```
 */
declare const AccordionItem: React__default.ForwardRefExoticComponent<AccordionItemProps & React__default.RefAttributes<HTMLDivElement>>;

type AlertVariant = "info" | "success" | "warning" | "error";
interface AlertProps extends React__default.HTMLAttributes<HTMLDivElement> {
    /** Alert variant/type */
    variant?: AlertVariant;
    /** Optional icon (if not provided, default icon will be shown) */
    icon?: React__default.ReactNode;
}
interface AlertTitleProps extends React__default.HTMLAttributes<HTMLHeadingElement> {
}
interface AlertDescriptionProps extends React__default.HTMLAttributes<HTMLDivElement> {
}
/**
 * Alert component with DaisyUI styling
 *
 * @example
 * ```tsx
 * <Alert variant="success">
 *   <AlertTitle>Success</AlertTitle>
 *   <AlertDescription>Your changes have been saved.</AlertDescription>
 * </Alert>
 * ```
 */
declare const Alert: React__default.ForwardRefExoticComponent<AlertProps & React__default.RefAttributes<HTMLDivElement>>;
/**
 * AlertTitle component for alert headings
 */
declare const AlertTitle: React__default.ForwardRefExoticComponent<AlertTitleProps & React__default.RefAttributes<HTMLHeadingElement>>;
/**
 * AlertDescription component for alert body text
 */
declare const AlertDescription: React__default.ForwardRefExoticComponent<AlertDescriptionProps & React__default.RefAttributes<HTMLDivElement>>;

interface AlertDialogProps extends React__default.DialogHTMLAttributes<HTMLDialogElement> {
    /** Whether the dialog is open */
    open?: boolean;
    /** Callback when dialog close is requested */
    onClose?: () => void;
    /** Dialog title */
    title?: string;
    /** Dialog description */
    description?: string;
    /** Action buttons */
    actions?: React__default.ReactNode;
}
/**
 * AlertDialog component with DaisyUI styling
 *
 * @example
 * ```tsx
 * <AlertDialog
 *   open={isOpen}
 *   onClose={() => setIsOpen(false)}
 *   title="Confirm Action"
 *   description="Are you sure you want to proceed?"
 *   actions={<>
 *     <Button onClick={onConfirm}>Confirm</Button>
 *     <Button variant="ghost" onClick={() => setIsOpen(false)}>Cancel</Button>
 *   </>}
 * />
 * ```
 */
declare const AlertDialog: React__default.ForwardRefExoticComponent<AlertDialogProps & React__default.RefAttributes<HTMLDialogElement>>;

type AvatarSize = "xs" | "sm" | "md" | "lg" | "xl";
type AvatarStatus = "online" | "offline" | null;
type AvatarShape = "circle" | "rounded" | "square" | "squircle" | "hexagon" | "triangle";
type AvatarRingColor = "default" | "neutral" | "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "error";
interface AvatarProps extends React__default.HTMLAttributes<HTMLDivElement> {
    /** Image source */
    src?: string;
    /** Alt text for image */
    alt?: string;
    /** Size variant */
    size?: AvatarSize;
    /** Online status indicator */
    status?: AvatarStatus;
    /** Fallback content when no image (text or ReactNode) */
    fallback?: React__default.ReactNode;
    /** Shape of avatar */
    shape?: AvatarShape;
    /** Ring around avatar */
    ring?: boolean;
    /** Ring color */
    ringColor?: AvatarRingColor;
    /** Ring offset */
    ringOffset?: boolean;
    /** Placeholder background color */
    placeholderColor?: AvatarRingColor;
}
/**
 * Avatar component with DaisyUI styling
 *
 * @example
 * ```tsx
 * <Avatar src="/user.jpg" alt="User" size="md" status="online" />
 * <Avatar fallback="JD" size="lg" />
 * <Avatar fallback="AB" shape="hexagon" ring ringColor="primary" />
 * ```
 */
declare const Avatar: React__default.ForwardRefExoticComponent<AvatarProps & React__default.RefAttributes<HTMLDivElement>>;
/**
 * AvatarGroup component for displaying multiple avatars
 */
interface AvatarGroupProps extends React__default.HTMLAttributes<HTMLDivElement> {
    /** Maximum number of avatars to show */
    max?: number;
    /** Size for child avatars and counter */
    size?: AvatarSize;
    /** Shape for child avatars and counter */
    shape?: AvatarShape;
}
declare const AvatarGroup: React__default.ForwardRefExoticComponent<AvatarGroupProps & React__default.RefAttributes<HTMLDivElement>>;

type BadgeVariant = "default" | "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "error" | "ghost" | "outline";
type BadgeSize = "xs" | "sm" | "md" | "lg";
interface BadgeProps extends React__default.HTMLAttributes<HTMLSpanElement> {
    /** Badge variant */
    variant?: BadgeVariant;
    /** Badge size */
    size?: BadgeSize;
}
/**
 * Badge component with DaisyUI styling
 *
 * @example
 * ```tsx
 * <Badge variant="primary">New</Badge>
 * <Badge variant="success" size="sm">Active</Badge>
 * ```
 */
declare const Badge: React__default.ForwardRefExoticComponent<BadgeProps & React__default.RefAttributes<HTMLSpanElement>>;

interface BreadcrumbProps extends React__default.HTMLAttributes<HTMLElement> {
}
interface BreadcrumbItemProps extends React__default.HTMLAttributes<HTMLLIElement> {
    /** Link href */
    href?: string;
    /** Whether this is the current/active item */
    current?: boolean;
}
/**
 * Breadcrumb navigation component
 *
 * @example
 * ```tsx
 * <Breadcrumb>
 *   <BreadcrumbItem href="/">Home</BreadcrumbItem>
 *   <BreadcrumbItem href="/products">Products</BreadcrumbItem>
 *   <BreadcrumbItem current>Details</BreadcrumbItem>
 * </Breadcrumb>
 * ```
 */
declare const Breadcrumb: React__default.ForwardRefExoticComponent<BreadcrumbProps & React__default.RefAttributes<HTMLElement>>;
declare const BreadcrumbItem: React__default.ForwardRefExoticComponent<BreadcrumbItemProps & React__default.RefAttributes<HTMLLIElement>>;

interface ButtonGroupProps extends React__default.HTMLAttributes<HTMLDivElement> {
    /** Orientation of the button group */
    orientation?: "horizontal" | "vertical";
}
/**
 * ButtonGroup component with DaisyUI join styling
 *
 * @example
 * ```tsx
 * <ButtonGroup>
 *   <Button>One</Button>
 *   <Button>Two</Button>
 *   <Button>Three</Button>
 * </ButtonGroup>
 * ```
 */
declare const ButtonGroup: React__default.ForwardRefExoticComponent<ButtonGroupProps & React__default.RefAttributes<HTMLDivElement>>;

interface CalendarProps extends Omit<React__default.HTMLAttributes<HTMLDivElement>, "onChange"> {
    /** Selected date */
    value?: Date;
    /** Callback when date is selected */
    onChange?: (date: Date) => void;
    /** Minimum selectable date */
    minDate?: Date;
    /** Maximum selectable date */
    maxDate?: Date;
}
/**
 * Calendar component for date selection
 *
 * @example
 * ```tsx
 * <Calendar value={selectedDate} onChange={setSelectedDate} />
 * ```
 */
declare const Calendar: React__default.ForwardRefExoticComponent<CalendarProps & React__default.RefAttributes<HTMLDivElement>>;

type CardVariant = "default" | "bordered" | "compact" | "side";
interface CardProps extends React__default.HTMLAttributes<HTMLDivElement> {
    /** Card variant */
    variant?: CardVariant;
    /** Image source for card */
    imageSrc?: string;
    /** Image alt text */
    imageAlt?: string;
}
interface CardBodyProps extends React__default.HTMLAttributes<HTMLDivElement> {
}
interface CardTitleProps extends React__default.HTMLAttributes<HTMLHeadingElement> {
}
interface CardActionsProps extends React__default.HTMLAttributes<HTMLDivElement> {
    /** Justify actions */
    justify?: "start" | "center" | "end";
}
/**
 * Card component with DaisyUI styling
 *
 * @example
 * ```tsx
 * <Card imageSrc="/image.jpg" variant="bordered">
 *   <CardBody>
 *     <CardTitle>Card Title</CardTitle>
 *     <p>Card content goes here</p>
 *     <CardActions justify="end">
 *       <Button>Action</Button>
 *     </CardActions>
 *   </CardBody>
 * </Card>
 * ```
 */
declare const Card: React__default.ForwardRefExoticComponent<CardProps & React__default.RefAttributes<HTMLDivElement>>;
declare const CardBody: React__default.ForwardRefExoticComponent<CardBodyProps & React__default.RefAttributes<HTMLDivElement>>;
declare const CardTitle: React__default.ForwardRefExoticComponent<CardTitleProps & React__default.RefAttributes<HTMLHeadingElement>>;
declare const CardActions: React__default.ForwardRefExoticComponent<CardActionsProps & React__default.RefAttributes<HTMLDivElement>>;

type CheckboxVariant = "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "error";
type CheckboxSize = "xs" | "sm" | "md" | "lg";
interface CheckboxProps extends Omit<React__default.InputHTMLAttributes<HTMLInputElement>, "size"> {
    /** Checkbox variant */
    variant?: CheckboxVariant;
    /** Checkbox size */
    size?: CheckboxSize;
    /** Label text */
    label?: string;
    /** Indeterminate state */
    indeterminate?: boolean;
}
/**
 * Checkbox component with DaisyUI styling
 *
 * @example
 * ```tsx
 * <Checkbox label="Accept terms" variant="primary" />
 * <Checkbox checked={true} variant="success" size="sm" />
 * ```
 */
declare const Checkbox: React__default.ForwardRefExoticComponent<CheckboxProps & React__default.RefAttributes<HTMLInputElement>>;

interface CollapsibleProps extends React__default.HTMLAttributes<HTMLDivElement> {
    /** Whether the collapsible is open by default */
    defaultOpen?: boolean;
    /** Controlled open state */
    open?: boolean;
    /** Callback when open state changes */
    onOpenChange?: (open: boolean) => void;
    /** Trigger element */
    trigger: React__default.ReactNode;
}
/**
 * Collapsible component with DaisyUI styling
 *
 * @example
 * ```tsx
 * <Collapsible trigger={<Button>Toggle</Button>}>
 *   <p>Collapsible content goes here</p>
 * </Collapsible>
 * ```
 */
declare const Collapsible: React__default.ForwardRefExoticComponent<CollapsibleProps & React__default.RefAttributes<HTMLDivElement>>;

type ComboboxVariant = "bordered" | "ghost" | "floating";
interface ComboboxOption {
    value: string;
    label: string;
    disabled?: boolean;
}
interface ComboboxProps {
    /** Style variant. 'floating' uses custom UI with floating label, 'bordered' and 'ghost' use standard behavior */
    variant?: ComboboxVariant;
    /** Available options */
    options: ComboboxOption[];
    /** Selected value */
    value?: string;
    /** Callback when value changes */
    onChange?: (value: string) => void;
    /** Placeholder text for the trigger button */
    placeholder?: string;
    /** Placeholder text for the search input */
    searchPlaceholder?: string;
    /** Text to display when no options match the search */
    emptyText?: string;
    /** Additional class name for the container */
    className?: string;
    /** Whether the combobox is disabled */
    disabled?: boolean;
    /** Unique identifier for the combobox */
    id?: string;
    /** Label text (required for floating variant, optional for others) */
    label?: string;
    /** Error message */
    error?: string;
    /** Helper text */
    helperText?: string;
}
/**
 * Combobox component with search functionality following shadcn pattern
 * Uses a button trigger with a dropdown containing a search input
 *
 * Features:
 * - **Floating variant**: Custom UI with floating label that moves to top when value is selected or dropdown opens
 * - **Bordered/Ghost variants**: Standard combobox behavior
 * - Searchable options with keyboard navigation
 * - Collision detection for dropdown positioning
 *
 * @example
 * ```tsx
 * // Floating variant
 * <Combobox
 *   variant="floating"
 *   label="Select Framework"
 *   options={[
 *     { value: 'react', label: 'React' },
 *     { value: 'vue', label: 'Vue' },
 *   ]}
 *   value={value}
 *   onChange={setValue}
 *   searchPlaceholder="Search frameworks..."
 * />
 *
 * // Standard variant
 * <Combobox
 *   options={[
 *     { value: '1', label: 'Option 1' },
 *     { value: '2', label: 'Option 2' },
 *   ]}
 *   value={selectedValue}
 *   onChange={setSelectedValue}
 *   placeholder="Select option..."
 * />
 * ```
 */
declare const Combobox: React.ForwardRefExoticComponent<ComboboxProps & React.RefAttributes<HTMLButtonElement>>;

interface CommandProps extends React__default.HTMLAttributes<HTMLDivElement> {
    /** Search value */
    value?: string;
    /** Callback when search value changes */
    onValueChange?: (value: string) => void;
    /** Placeholder for search input */
    placeholder?: string;
}
interface CommandItemProps extends Omit<React__default.HTMLAttributes<HTMLButtonElement>, "onSelect"> {
    /** Item value */
    value?: string;
    /** Callback when item is selected */
    onSelect?: (value: string) => void;
    /** Whether item is disabled */
    disabled?: boolean;
}
interface CommandGroupProps extends React__default.HTMLAttributes<HTMLDivElement> {
    /** Group heading */
    heading?: string;
}
/**
 * Command palette component for searchable commands
 *
 * @example
 * ```tsx
 * <Command placeholder="Type a command...">
 *   <CommandGroup heading="Suggestions">
 *     <CommandItem value="calendar">Calendar</CommandItem>
 *     <CommandItem value="search">Search</CommandItem>
 *   </CommandGroup>
 * </Command>
 * ```
 */
declare const Command: React__default.ForwardRefExoticComponent<CommandProps & React__default.RefAttributes<HTMLDivElement>>;
declare const CommandGroup: React__default.ForwardRefExoticComponent<CommandGroupProps & React__default.RefAttributes<HTMLDivElement>>;
declare const CommandItem: React__default.ForwardRefExoticComponent<CommandItemProps & React__default.RefAttributes<HTMLButtonElement>>;

interface ContextMenuProps extends React__default.HTMLAttributes<HTMLDivElement> {
    /** Menu items */
    items: ContextMenuItem[];
    /** Trigger element */
    trigger: React__default.ReactNode;
}
interface ContextMenuItem {
    label: string;
    onClick?: () => void;
    disabled?: boolean;
    icon?: React__default.ReactNode;
    separator?: boolean;
}
/**
 * ContextMenu component
 *
 * @example
 * ```tsx
 * <ContextMenu
 *   trigger={<div>Right click me</div>}
 *   items={[
 *     { label: 'Copy', onClick: handleCopy },
 *     { label: 'Paste', onClick: handlePaste },
 *   ]}
 * />
 * ```
 */
declare const ContextMenu: React__default.ForwardRefExoticComponent<ContextMenuProps & React__default.RefAttributes<HTMLDivElement>>;

type DataTableSize = "xs" | "sm" | "md" | "lg";
type SortDirection = "asc" | "desc" | null;
type PaginationVariant = "numbered" | "simple";
interface DataTableColumnDef<T> {
    /** Unique key for the column */
    key: string;
    /** Column header text */
    header: string;
    /** Whether the column is sortable */
    sortable?: boolean;
    /** Custom render function for cell content */
    render?: (item: T, index: number) => React__default.ReactNode;
    /** Custom sort function */
    sortFn?: (a: T, b: T) => number;
    /** Header alignment */
    headerAlign?: "left" | "center" | "right";
    /** Cell alignment */
    cellAlign?: "left" | "center" | "right";
    /** Column width */
    width?: string;
}
interface DataTableSortState {
    column: string | null;
    direction: SortDirection;
}
interface SortableDataTableProps<T> extends React__default.HTMLAttributes<HTMLDivElement> {
    /** Table data */
    data: T[];
    /** Column definitions */
    columns: DataTableColumnDef<T>[];
    /** Function to get unique row key */
    getRowKey: (item: T) => string | number;
    /** Table size */
    size?: DataTableSize;
    /** Enable zebra stripes */
    zebra?: boolean;
    /** Pin rows on scroll */
    pinRows?: boolean;
    /** Pin columns on scroll */
    pinCols?: boolean;
    /** Enable row expansion */
    expandable?: boolean;
    /** Render function for expanded content */
    renderExpandedRow?: (item: T) => React__default.ReactNode;
    /** Initially expanded row keys */
    defaultExpandedKeys?: (string | number)[];
    /** Controlled expanded keys */
    expandedKeys?: (string | number)[];
    /** Callback when expanded keys change */
    onExpandedChange?: (keys: (string | number)[]) => void;
    /** Default sort state */
    defaultSort?: DataTableSortState;
    /** Controlled sort state */
    sortState?: DataTableSortState;
    /** Callback when sort changes */
    onSortChange?: (state: DataTableSortState) => void;
    /** Show loading state */
    loading?: boolean;
    /** Empty state message */
    emptyMessage?: React__default.ReactNode;
    /** Custom class for table */
    tableClassName?: string;
    /** Custom class for header row */
    headerClassName?: string;
    /** Custom class for body rows */
    rowClassName?: string | ((item: T, index: number) => string);
    /** Custom icon for ascending sort */
    sortAscIcon?: React__default.ReactNode;
    /** Custom icon for descending sort */
    sortDescIcon?: React__default.ReactNode;
    /** Custom icon for unsorted state (both arrows) */
    sortBothIcon?: React__default.ReactNode;
    /** Custom icon for expand/collapse */
    expandIcon?: (expanded: boolean) => React__default.ReactNode;
    /** Enable pagination */
    pagination?: boolean;
    /** Number of items per page */
    pageSize?: number;
    /** Current page (1-indexed, controlled) */
    currentPage?: number;
    /** Callback when page changes */
    onPageChange?: (page: number) => void;
    /** Default page (uncontrolled) */
    defaultPage?: number;
    /** Number of sibling pages to show in pagination */
    paginationSiblingCount?: number;
    /** Custom class for pagination wrapper */
    paginationClassName?: string;
    /** Position of pagination */
    paginationPosition?: "top" | "bottom" | "both";
    /** Pagination variant - numbered (default) shows page numbers, simple shows only prev/next buttons */
    paginationVariant?: PaginationVariant;
    /** Available page size options for simple pagination variant */
    pageSizeOptions?: number[];
    /** Callback when page size changes (for controlled page size) */
    onPageSizeChange?: (pageSize: number) => void;
}
/**
 * SortableDataTable component with sorting and expandable row features
 *
 * @example
 * ```tsx
 * // Basic sortable table
 * <SortableDataTable
 *   data={users}
 *   columns={[
 *     { key: 'name', header: 'Name', sortable: true },
 *     { key: 'email', header: 'Email', sortable: true },
 *     { key: 'role', header: 'Role' },
 *   ]}
 *   getRowKey={(user) => user.id}
 * />
 *
 * // With expandable rows
 * <SortableDataTable
 *   data={orders}
 *   columns={columns}
 *   getRowKey={(order) => order.id}
 *   expandable
 *   renderExpandedRow={(order) => <OrderDetails order={order} />}
 * />
 * ```
 */
declare const SortableDataTable: <T extends Record<string, any>>(props: SortableDataTableProps<T> & {
    ref?: React__default.ForwardedRef<HTMLDivElement>;
}) => React__default.ReactElement;

type DateInputVariant = "bordered" | "ghost";
type DateInputColor = "default" | "neutral" | "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "error";
type DateInputSize = "xs" | "sm" | "md" | "lg" | "xl";
type DateFormat = "dd/mm/yyyy" | "mm/dd/yyyy" | "yyyy/mm/dd" | "yyyy-mm-dd";
interface DateInputProps extends Omit<React__default.InputHTMLAttributes<HTMLInputElement>, "size" | "value" | "onChange"> {
    /** Style variant of the input */
    variant?: DateInputVariant;
    /** Color variant of the input */
    color?: DateInputColor;
    /** Size of the input */
    size?: DateInputSize;
    /** Label text displayed above the input */
    label?: string;
    /** Error message displayed below the input */
    error?: string;
    /** Helper text displayed below the input */
    helperText?: string;
    /** Selected date value */
    value?: Date | null;
    /** Callback when date changes */
    onChange?: (date: Date | null) => void;
    /** Date display format */
    dateFormat?: DateFormat;
    /** Minimum selectable date */
    minDate?: Date;
    /** Maximum selectable date */
    maxDate?: Date;
    /** Show calendar picker */
    showCalendar?: boolean;
    /** Placeholder text */
    placeholder?: string;
}
/**
 * DateInput component with customizable date format display
 *
 * @example
 * ```tsx
 * <DateInput
 *   label="Birth Date"
 *   value={birthDate}
 *   onChange={setBirthDate}
 *   dateFormat="dd/mm/yyyy"
 * />
 * ```
 */
declare const DateInput: React__default.ForwardRefExoticComponent<DateInputProps & React__default.RefAttributes<HTMLInputElement>>;

type DatePickerFormat = "dd/mm/yyyy" | "mm/dd/yyyy" | "yyyy-mm-dd" | "dd-mm-yyyy" | "mm-dd-yyyy";
interface DateInfo {
    /** Date in ISO format (yyyy-mm-dd) */
    iso: string;
    /** Date in display format based on selected format */
    display: string;
    /** Selected format */
    format: DatePickerFormat;
}
type DatePickerVariant = "bordered" | "ghost" | "floating";
type DatePickerColor = "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "error";
type DatePickerSize = "xs" | "sm" | "md" | "lg" | "xl";
interface DatePickerProps extends Omit<React__default.InputHTMLAttributes<HTMLInputElement>, "type" | "onChange" | "value" | "size"> {
    /** Style variant */
    variant?: DatePickerVariant;
    /** Color variant */
    color?: DatePickerColor;
    /** Size */
    size?: DatePickerSize;
    /** Selected date value (ISO string yyyy-mm-dd) - for controlled mode */
    value?: string;
    /** Default date value (ISO string yyyy-mm-dd) - for uncontrolled mode */
    defaultValue?: string;
    /** Callback when date changes */
    onChange?: (dateInfo: DateInfo | null) => void;
    /** Minimum selectable date (ISO string yyyy-mm-dd) */
    min?: string;
    /** Maximum selectable date (ISO string yyyy-mm-dd) */
    max?: string;
    /** Label for floating variant or bordered/ghost variants */
    label?: string;
    /** Error message */
    error?: string;
    /** Helper text */
    helperText?: string;
    /** Date display format */
    format?: DatePickerFormat;
    /** Fullwidth */
    fullWidth?: boolean;
}
/**
 * DatePicker component that displays dates in customizable formats
 * using a native <input type="date"> under the hood (no third-party packages).
 *
 * The native date input always uses yyyy-mm-dd internally,
 * but we overlay a formatted display on top of it.
 *
 * Supports both controlled and uncontrolled modes:
 * - Controlled: Pass `value` and `onChange` props
 * - Uncontrolled: Pass `defaultValue` (or neither)
 *
 * @example
 * ```tsx
 * // Controlled mode with custom format
 * const [date, setDate] = useState("2024-01-01");
 * <DatePicker
 *   variant="floating"
 *   label="Pick a date"
 *   value={date}
 *   format="mm/dd/yyyy"
 *   onChange={(info) => setDate(info?.iso || "")}
 * />
 *
 * // Uncontrolled mode
 * <DatePicker variant="bordered" defaultValue="2024-01-01" format="dd-mm-yyyy" />
 *
 * // Display only (value without onChange)
 * <DatePicker variant="bordered" value="2024-01-01" />
 * ```
 */
declare const DatePicker: React__default.ForwardRefExoticComponent<DatePickerProps & React__default.RefAttributes<HTMLInputElement>>;

type DialogVerticalPosition = "top" | "middle" | "bottom";
type DialogHorizontalPosition = "start" | "center" | "end";
type DialogSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "full";
interface DialogProps extends React__default.DialogHTMLAttributes<HTMLDialogElement> {
    /** Whether the dialog is open */
    open?: boolean;
    /** Callback when dialog close is requested */
    onClose?: () => void;
    /** Vertical position of the dialog */
    position?: DialogVerticalPosition;
    /** Horizontal position of the dialog */
    horizontalPosition?: DialogHorizontalPosition;
    /** Whether clicking outside closes the dialog */
    closeOnClickOutside?: boolean;
    /** Whether pressing Escape closes the dialog */
    closeOnEscape?: boolean;
    /** Show close button in corner */
    showCloseButton?: boolean;
    /** Custom close button content */
    closeButtonContent?: React__default.ReactNode;
    /** Size preset for the dialog */
    size?: DialogSize;
    /** Custom max width class (e.g., "max-w-2xl") - overrides size */
    maxWidth?: string;
    /** Responsive: move to bottom on small screens */
    responsive?: boolean;
}
interface DialogTitleProps extends React__default.HTMLAttributes<HTMLHeadingElement> {
    /** Content of the title */
    children: React__default.ReactNode;
}
interface DialogDescriptionProps extends React__default.HTMLAttributes<HTMLParagraphElement> {
    /** Content of the description */
    children: React__default.ReactNode;
}
interface DialogActionsProps extends React__default.HTMLAttributes<HTMLDivElement> {
    /** Action buttons */
    children: React__default.ReactNode;
}
interface DialogCloseButtonProps extends React__default.ButtonHTMLAttributes<HTMLButtonElement> {
    /** Close button content */
    children?: React__default.ReactNode;
}
/**
 * Dialog Title component
 */
declare const DialogTitle: React__default.ForwardRefExoticComponent<DialogTitleProps & React__default.RefAttributes<HTMLHeadingElement>>;
/**
 * Dialog Description component
 */
declare const DialogDescription: React__default.ForwardRefExoticComponent<DialogDescriptionProps & React__default.RefAttributes<HTMLParagraphElement>>;
/**
 * Dialog Actions component - container for action buttons
 */
declare const DialogActions: React__default.ForwardRefExoticComponent<DialogActionsProps & React__default.RefAttributes<HTMLDivElement>>;
/**
 * Dialog Close Button - positioned in the corner
 */
declare const DialogCloseButton: React__default.ForwardRefExoticComponent<DialogCloseButtonProps & React__default.RefAttributes<HTMLButtonElement>>;
/**
 * Dialog/Modal component with DaisyUI styling
 */
declare const Dialog: React__default.ForwardRefExoticComponent<DialogProps & React__default.RefAttributes<HTMLDialogElement>>;
type DialogPosition = DialogVerticalPosition;

type DrawerPosition = "left" | "right" | "top" | "bottom";
interface DrawerProps extends Omit<React__default.HTMLAttributes<HTMLDivElement>, "content"> {
    /** Whether drawer is open */
    open?: boolean;
    /** Callback when drawer should close */
    onClose?: () => void;
    /** Position of drawer */
    position?: DrawerPosition;
    /** Drawer content */
    content: React__default.ReactNode;
}
/**
 * Drawer component with DaisyUI styling
 *
 * @example
 * ```tsx
 * <Drawer
 *   open={isOpen}
 *   onClose={() => setIsOpen(false)}
 *   position="right"
 *   content={<div className="menu p-4 w-80">Drawer content</div>}
 * >
 *   <Button onClick={() => setIsOpen(true)}>Open Drawer</Button>
 * </Drawer>
 * ```
 */
declare const Drawer: React__default.ForwardRefExoticComponent<DrawerProps & React__default.RefAttributes<HTMLDivElement>>;

type DropdownPosition = "top" | "bottom" | "left" | "right" | "end";
interface DropdownProps extends React__default.HTMLAttributes<HTMLDivElement> {
    /** Trigger element */
    trigger: React__default.ReactNode;
    /** Dropdown position */
    position?: DropdownPosition;
    /** Open on hover instead of click */
    hover?: boolean;
    /** Controlled open state */
    open?: boolean;
    /** Callback when open state changes */
    onOpenChange?: (open: boolean) => void;
}
/**
 * Dropdown component with DaisyUI styling
 *
 * @example
 * ```tsx
 * <Dropdown trigger={<Button>Menu</Button>} position="bottom">
 *   <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
 *     <li><a>Item 1</a></li>
 *     <li><a>Item 2</a></li>
 *   </ul>
 * </Dropdown>
 * ```
 */
declare const Dropdown: React__default.ForwardRefExoticComponent<DropdownProps & React__default.RefAttributes<HTMLDivElement>>;
/**
 * DropdownMenu component for menu content
 */
interface DropdownMenuProps extends React__default.HTMLAttributes<HTMLUListElement> {
}
declare const DropdownMenu: React__default.ForwardRefExoticComponent<DropdownMenuProps & React__default.RefAttributes<HTMLUListElement>>;

type DynamicFieldType = "text" | "email" | "password" | "number" | "tel" | "url" | "date" | "time" | "datetime-local" | "textarea" | "select" | "checkbox" | "radio" | "hidden";
interface DynamicFieldValidation {
    /** Field is required */
    required?: boolean | string;
    /** Minimum length for text fields */
    minLength?: number | {
        value: number;
        message: string;
    };
    /** Maximum length for text fields */
    maxLength?: number | {
        value: number;
        message: string;
    };
    /** Minimum value for number fields */
    min?: number | {
        value: number;
        message: string;
    };
    /** Maximum value for number fields */
    max?: number | {
        value: number;
        message: string;
    };
    /** Regex pattern for validation */
    pattern?: RegExp | {
        value: RegExp;
        message: string;
    };
    /** Custom validation function */
    validate?: ((value: unknown) => boolean | string) | Record<string, (value: unknown) => boolean | string>;
}
interface DynamicFieldOption {
    /** Option value */
    value: string;
    /** Option display label */
    label: string;
    /** Whether option is disabled */
    disabled?: boolean;
}
interface DynamicFieldConfig {
    /** Unique field name (required) */
    name: string;
    /** Field type */
    type: DynamicFieldType;
    /** Field label */
    label?: string;
    /** Placeholder text */
    placeholder?: string;
    /** Default value */
    defaultValue?: unknown;
    /** Helper/description text */
    description?: string;
    /** Whether field is disabled */
    disabled?: boolean;
    /** Whether field is readonly */
    readOnly?: boolean;
    /** Options for select/radio fields */
    options?: DynamicFieldOption[];
    /** Validation rules (compatible with react-hook-form) */
    validation?: DynamicFieldValidation;
    /** Additional CSS classes for the field wrapper */
    className?: string;
    /** Additional CSS classes for the input element */
    inputClassName?: string;
    /** Number of rows for textarea */
    rows?: number;
    /** Auto-focus this field */
    autoFocus?: boolean;
    /** Autocomplete attribute */
    autoComplete?: string;
    /** Custom props to pass to the underlying component */
    componentProps?: Record<string, unknown>;
}
interface DynamicFormFieldProps {
    /** Field configuration */
    field: DynamicFieldConfig;
    /** Error message for this field */
    error?: string;
    /** Field value (controlled) */
    value?: unknown;
    /** onChange handler (controlled) */
    onChange?: (value: unknown) => void;
    /** onBlur handler */
    onBlur?: () => void;
    /** Custom ref */
    inputRef?: React__default.Ref<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>;
}
/**
 * DynamicFormField - Renders form fields dynamically based on JSON configuration
 *
 * @example
 * ```tsx
 * // With react-hook-form Controller
 * import { Controller, useForm } from "react-hook-form";
 *
 * const { control, formState: { errors } } = useForm();
 *
 * <Controller
 *   name={field.name}
 *   control={control}
 *   rules={field.validation}
 *   render={({ field: controllerField }) => (
 *     <DynamicFormField
 *       field={fieldConfig}
 *       value={controllerField.value}
 *       onChange={controllerField.onChange}
 *       onBlur={controllerField.onBlur}
 *       error={errors[field.name]?.message}
 *     />
 *   )}
 * />
 * ```
 */
declare const DynamicFormField: React__default.FC<DynamicFormFieldProps>;
interface ControlledDynamicFormFieldProps {
    /** Field configuration */
    field: DynamicFieldConfig;
    /** react-hook-form control object */
    control: Control<any>;
    /** Error message for this field */
    error?: string;
}
/**
 * ControlledDynamicFormField - Wraps DynamicFormField with react-hook-form Controller
 *
 * @example
 * ```tsx
 * import { useForm } from "react-hook-form";
 *
 * const { control, formState: { errors } } = useForm();
 *
 * <ControlledDynamicFormField
 *   field={fieldConfig}
 *   control={control}
 *   error={errors[fieldConfig.name]?.message}
 * />
 * ```
 */
declare const ControlledDynamicFormField: React__default.FC<ControlledDynamicFormFieldProps>;
interface DynamicFormProps extends Omit<React__default.FormHTMLAttributes<HTMLFormElement>, "onSubmit"> {
    /** Array of field configurations */
    fields: DynamicFieldConfig[];
    /** Form submission handler */
    onSubmit?: (data: Record<string, unknown>) => void | Promise<void>;
    /** Errors object (compatible with react-hook-form errors) */
    errors?: Record<string, {
        message?: string;
    } | undefined>;
    /** Control object from react-hook-form */
    control?: Control<any>;
    /** HandleSubmit function from react-hook-form */
    handleSubmit?: (onValid: (data: Record<string, unknown>) => void) => (e?: React__default.BaseSyntheticEvent) => Promise<void>;
    /** Gap between fields */
    gap?: "sm" | "md" | "lg";
    /** Submit button text */
    submitText?: string;
    /** Whether form is submitting */
    isSubmitting?: boolean;
    /** Layout direction */
    layout?: "vertical" | "horizontal" | "grid";
    /** Number of columns for grid layout */
    columns?: 1 | 2 | 3 | 4;
    /** Render custom actions instead of default submit button */
    renderActions?: () => React__default.ReactNode;
    /** Show default submit button */
    showSubmitButton?: boolean;
}
/**
 * DynamicForm - Renders a complete form based on field configurations
 *
 * @example
 * ```tsx
 * // With react-hook-form
 * import { useForm } from "react-hook-form";
 *
 * const { control, handleSubmit, formState: { errors, isSubmitting } } = useForm();
 *
 * <DynamicForm
 *   fields={formFields}
 *   control={control}
 *   handleSubmit={handleSubmit}
 *   errors={errors}
 *   isSubmitting={isSubmitting}
 *   onSubmit={(data) => console.log(data)}
 * />
 * ```
 */
declare const DynamicForm: React__default.ForwardRefExoticComponent<DynamicFormProps & React__default.RefAttributes<HTMLFormElement>>;

interface EmptyProps extends React__default.HTMLAttributes<HTMLDivElement> {
    /** Empty state icon */
    icon?: React__default.ReactNode;
    /** Empty state title */
    title?: string;
    /** Empty state description */
    description?: string;
    /** Action button */
    action?: React__default.ReactNode;
}
/**
 * Empty state component
 *
 * @example
 * ```tsx
 * <Empty
 *   icon={<Icon />}
 *   title="No items found"
 *   description="Try adjusting your search"
 *   action={<Button>Add New</Button>}
 * />
 * ```
 */
declare const Empty: React__default.ForwardRefExoticComponent<EmptyProps & React__default.RefAttributes<HTMLDivElement>>;

interface FieldProps extends React__default.HTMLAttributes<HTMLDivElement> {
    /** Field name/id (auto-generated if not provided) */
    name?: string;
    /** Error message for this field */
    error?: string;
    /** Whether the field is required */
    required?: boolean;
}
/**
 * Field root component following shadcn composable pattern
 *
 * @example
 * ```tsx
 * <Field name="email" error={errors.email} required>
 *   <FieldLabel>Email</FieldLabel>
 *   <Input type="email" />
 *   <FieldDescription>We'll never share your email.</FieldDescription>
 *   <FieldError />
 * </Field>
 * ```
 */
declare const Field: React__default.ForwardRefExoticComponent<FieldProps & React__default.RefAttributes<HTMLDivElement>>;
interface FieldLabelProps extends React__default.LabelHTMLAttributes<HTMLLabelElement> {
}
declare const FieldLabel: React__default.ForwardRefExoticComponent<FieldLabelProps & React__default.RefAttributes<HTMLLabelElement>>;
interface FieldDescriptionProps extends React__default.HTMLAttributes<HTMLParagraphElement> {
}
declare const FieldDescription: React__default.ForwardRefExoticComponent<FieldDescriptionProps & React__default.RefAttributes<HTMLParagraphElement>>;
interface FieldErrorProps extends React__default.HTMLAttributes<HTMLParagraphElement> {
    /** Override error message from context */
    message?: string;
}
declare const FieldError: React__default.ForwardRefExoticComponent<FieldErrorProps & React__default.RefAttributes<HTMLParagraphElement>>;
interface FieldGroupProps extends React__default.HTMLAttributes<HTMLDivElement> {
    /** Direction of the group */
    direction?: "horizontal" | "vertical";
}
declare const FieldGroup: React__default.ForwardRefExoticComponent<FieldGroupProps & React__default.RefAttributes<HTMLDivElement>>;
interface FieldSeparatorProps extends React__default.HTMLAttributes<HTMLDivElement> {
}
declare const FieldSeparator: React__default.ForwardRefExoticComponent<FieldSeparatorProps & React__default.RefAttributes<HTMLDivElement>>;
interface FieldSetProps extends React__default.FieldsetHTMLAttributes<HTMLFieldSetElement> {
}
declare const FieldSet: React__default.ForwardRefExoticComponent<FieldSetProps & React__default.RefAttributes<HTMLFieldSetElement>>;
interface FieldLegendProps extends React__default.HTMLAttributes<HTMLLegendElement> {
}
declare const FieldLegend: React__default.ForwardRefExoticComponent<FieldLegendProps & React__default.RefAttributes<HTMLLegendElement>>;

interface FormProps extends React__default.FormHTMLAttributes<HTMLFormElement> {
}
/**
 * Form component wrapper
 *
 * @example
 * ```tsx
 * <Form onSubmit={handleSubmit}>
 *   <FormField name="email">
 *     <FormItem>
 *       <FormLabel>Email</FormLabel>
 *       <FormControl>
 *         <Input type="email" />
 *       </FormControl>
 *       <FormDescription>Your email address</FormDescription>
 *       <FormMessage />
 *     </FormItem>
 *   </FormField>
 * </Form>
 * ```
 */
declare const Form: React__default.ForwardRefExoticComponent<FormProps & React__default.RefAttributes<HTMLFormElement>>;
interface FormFieldProps extends React__default.HTMLAttributes<HTMLDivElement> {
    /** Field name (required) */
    name: string;
    /** Error message for this field */
    error?: string;
}
declare const FormField: React__default.ForwardRefExoticComponent<FormFieldProps & React__default.RefAttributes<HTMLDivElement>>;
interface FormItemProps extends React__default.HTMLAttributes<HTMLDivElement> {
}
declare const FormItem: React__default.ForwardRefExoticComponent<FormItemProps & React__default.RefAttributes<HTMLDivElement>>;
interface FormLabelProps extends React__default.LabelHTMLAttributes<HTMLLabelElement> {
}
declare const FormLabel: React__default.ForwardRefExoticComponent<FormLabelProps & React__default.RefAttributes<HTMLLabelElement>>;
interface FormControlProps extends React__default.HTMLAttributes<HTMLDivElement> {
}
declare const FormControl: React__default.ForwardRefExoticComponent<FormControlProps & React__default.RefAttributes<HTMLDivElement>>;
interface FormDescriptionProps extends React__default.HTMLAttributes<HTMLParagraphElement> {
}
declare const FormDescription: React__default.ForwardRefExoticComponent<FormDescriptionProps & React__default.RefAttributes<HTMLParagraphElement>>;
interface FormMessageProps extends React__default.HTMLAttributes<HTMLParagraphElement> {
    /** Override error message from context */
    message?: string;
}
declare const FormMessage: React__default.ForwardRefExoticComponent<FormMessageProps & React__default.RefAttributes<HTMLParagraphElement>>;
interface FormSectionProps extends React__default.HTMLAttributes<HTMLDivElement> {
    /** Section title */
    title?: string;
    /** Section description */
    description?: string;
}
declare const FormSection: React__default.ForwardRefExoticComponent<FormSectionProps & React__default.RefAttributes<HTMLDivElement>>;
interface FormActionsProps extends React__default.HTMLAttributes<HTMLDivElement> {
    /** Alignment of actions */
    align?: "start" | "center" | "end" | "between";
}
declare const FormActions: React__default.ForwardRefExoticComponent<FormActionsProps & React__default.RefAttributes<HTMLDivElement>>;

type FullPageLoaderSize = "xs" | "sm" | "md" | "lg" | "xl";
type FullPageLoaderType = "spinner" | "dots" | "ring" | "ball" | "bars" | "infinity";
type FullPageLoaderVariant = "default" | "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "error";
interface FullPageLoaderProps extends React__default.HTMLAttributes<HTMLDivElement> {
    /** Whether the loader is visible */
    visible?: boolean;
    /** Loader spinner size */
    size?: FullPageLoaderSize;
    /** Loader animation type */
    type?: FullPageLoaderType;
    /** Loader color variant */
    variant?: FullPageLoaderVariant;
    /** Loading text to display below spinner */
    text?: string;
    /** Background opacity (0-100) */
    backgroundOpacity?: number;
    /** Whether to blur the background */
    blur?: boolean;
    /** Z-index for the overlay */
    zIndex?: number;
}
/**
 * Full Page Loader component - displays a full-screen loading overlay
 */
declare const FullPageLoader: React__default.ForwardRefExoticComponent<FullPageLoaderProps & React__default.RefAttributes<HTMLDivElement>>;

interface HoverCardProps extends React__default.HTMLAttributes<HTMLDivElement> {
    /** Trigger element */
    trigger: React__default.ReactNode;
    /** Delay before showing (ms) */
    openDelay?: number;
    /** Delay before hiding (ms) */
    closeDelay?: number;
}
/**
 * HoverCard component - shows content on hover
 *
 * @example
 * ```tsx
 * <HoverCard trigger={<Button>Hover me</Button>}>
 *   <div className="card compact bg-base-100 shadow-xl">
 *     <div className="card-body">
 *       <h3>Hover Content</h3>
 *       <p>This appears on hover</p>
 *     </div>
 *   </div>
 * </HoverCard>
 * ```
 */
declare const HoverCard: React__default.ForwardRefExoticComponent<HoverCardProps & React__default.RefAttributes<HTMLDivElement>>;

interface InputGroupProps extends React__default.HTMLAttributes<HTMLLabelElement> {
    /** Left addon content */
    left?: React__default.ReactNode;
    /** Right addon content */
    right?: React__default.ReactNode;
}
/**
 * InputGroup component for input with addons
 *
 * @example
 * ```tsx
 * <InputGroup left="$" right=".00">
 *   <Input type="number" />
 * </InputGroup>
 * ```
 */
declare const InputGroup: React__default.ForwardRefExoticComponent<InputGroupProps & React__default.RefAttributes<HTMLLabelElement>>;

interface InputOTPProps extends Omit<React__default.HTMLAttributes<HTMLDivElement>, "onChange"> {
    /** Number of OTP digits */
    length?: number;
    /** Callback when OTP value changes */
    onChange?: (value: string) => void;
    /** Callback when OTP is complete */
    onComplete?: (value: string) => void;
    /** Current value */
    value?: string;
    /** Unique identifier for the OTP input group */
    id?: string;
}
/**
 * InputOTP component for one-time password entry
 *
 * @example
 * ```tsx
 * <InputOTP
 *   length={6}
 *   value={otp}
 *   onChange={setOtp}
 *   onComplete={handleOtpComplete}
 * />
 * ```
 */
declare const InputOTP: React__default.ForwardRefExoticComponent<InputOTPProps & React__default.RefAttributes<HTMLDivElement>>;

interface ItemProps extends Omit<React__default.HTMLAttributes<HTMLDivElement>, "title"> {
    /** Item icon */
    icon?: React__default.ReactNode;
    /** Item title */
    title?: string;
    /** Item description */
    description?: string;
    /** Right content */
    rightContent?: React__default.ReactNode;
}
/**
 * Item component for list items
 *
 * @example
 * ```tsx
 * <Item
 *   icon={<Icon />}
 *   title="Item Title"
 *   description="Item description"
 *   rightContent={<Badge>New</Badge>}
 * />
 * ```
 */
declare const Item: React__default.ForwardRefExoticComponent<ItemProps & React__default.RefAttributes<HTMLDivElement>>;

type KbdSize = "xs" | "sm" | "md" | "lg";
interface KbdProps extends React__default.HTMLAttributes<HTMLElement> {
    /** Size variant */
    size?: KbdSize;
}
/**
 * Kbd component for keyboard shortcuts
 *
 * @example
 * ```tsx
 * <Kbd>⌘</Kbd> + <Kbd>K</Kbd>
 * <Kbd size="lg">Ctrl</Kbd>
 * ```
 */
declare const Kbd: React__default.ForwardRefExoticComponent<KbdProps & React__default.RefAttributes<HTMLElement>>;

type MenubarOrientation = "horizontal" | "vertical";
type MenubarSize = "xs" | "sm" | "md" | "lg";
interface MenubarProps extends React__default.HTMLAttributes<HTMLUListElement> {
    /** Orientation of menu */
    orientation?: MenubarOrientation;
    /** Size variant */
    size?: MenubarSize;
    /** Compact mode */
    compact?: boolean;
}
interface MenubarItemProps extends React__default.HTMLAttributes<HTMLLIElement> {
    /** Item href */
    href?: string;
    /** Whether item is disabled */
    disabled?: boolean;
    /** Whether item is active */
    active?: boolean;
}
/**
 * Menubar component with DaisyUI styling
 *
 * @example
 * ```tsx
 * <Menubar>
 *   <MenubarItem active>Home</MenubarItem>
 *   <MenubarItem href="/about">About</MenubarItem>
 *   <MenubarItem disabled>Settings</MenubarItem>
 * </Menubar>
 * ```
 */
declare const Menubar: React__default.ForwardRefExoticComponent<MenubarProps & React__default.RefAttributes<HTMLUListElement>>;
declare const MenubarItem: React__default.ForwardRefExoticComponent<MenubarItemProps & React__default.RefAttributes<HTMLLIElement>>;

type NativeSelectVariant = "bordered" | "ghost";
type NativeSelectColor = "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "error";
type NativeSelectSize = "xs" | "sm" | "md" | "lg";
interface NativeSelectProps extends Omit<React__default.SelectHTMLAttributes<HTMLSelectElement>, "size"> {
    /** Select variant */
    variant?: NativeSelectVariant;
    /** Select color */
    color?: NativeSelectColor;
    /** Select size */
    size?: NativeSelectSize;
    /** Options array */
    options?: Array<{
        value: string;
        label: string;
        disabled?: boolean;
    }>;
}
/**
 * NativeSelect component with DaisyUI styling
 *
 * @example
 * ```tsx
 * <NativeSelect
 *   variant="bordered"
 *   options={[
 *     { value: '1', label: 'Option 1' },
 *     { value: '2', label: 'Option 2' },
 *   ]}
 * />
 * ```
 */
declare const NativeSelect: React__default.ForwardRefExoticComponent<NativeSelectProps & React__default.RefAttributes<HTMLSelectElement>>;

type NavbarColor = "default" | "neutral" | "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "error";
interface NavbarProps extends React__default.HTMLAttributes<HTMLDivElement> {
    /** Background color variant */
    color?: NavbarColor;
    /** Add shadow */
    shadow?: boolean;
    /** Add border */
    bordered?: boolean;
    /** Make navbar sticky to top */
    sticky?: boolean;
    /** Glass effect background */
    glass?: boolean;
}
interface NavbarStartProps extends React__default.HTMLAttributes<HTMLDivElement> {
}
interface NavbarCenterProps extends React__default.HTMLAttributes<HTMLDivElement> {
}
interface NavbarEndProps extends React__default.HTMLAttributes<HTMLDivElement> {
}
/**
 * Navbar component with DaisyUI styling
 *
 * A navigation bar for the top of the page with start, center, and end sections.
 *
 * @example
 * ```tsx
 * <Navbar>
 *   <NavbarStart>
 *     <a className="btn btn-ghost text-xl">daisyUI</a>
 *   </NavbarStart>
 *   <NavbarCenter>
 *     <a className="btn btn-ghost">Home</a>
 *     <a className="btn btn-ghost">About</a>
 *   </NavbarCenter>
 *   <NavbarEnd>
 *     <button className="btn btn-primary">Login</button>
 *   </NavbarEnd>
 * </Navbar>
 * ```
 */
declare const Navbar: React__default.ForwardRefExoticComponent<NavbarProps & React__default.RefAttributes<HTMLDivElement>>;
/**
 * NavbarStart - Left section of the navbar (fills 50% width)
 */
declare const NavbarStart: React__default.ForwardRefExoticComponent<NavbarStartProps & React__default.RefAttributes<HTMLDivElement>>;
/**
 * NavbarCenter - Center section of the navbar
 */
declare const NavbarCenter: React__default.ForwardRefExoticComponent<NavbarCenterProps & React__default.RefAttributes<HTMLDivElement>>;
/**
 * NavbarEnd - Right section of the navbar (fills 50% width)
 */
declare const NavbarEnd: React__default.ForwardRefExoticComponent<NavbarEndProps & React__default.RefAttributes<HTMLDivElement>>;

interface NavigationMenuProps extends React__default.HTMLAttributes<HTMLElement> {
}
interface NavigationMenuItemProps extends React__default.HTMLAttributes<HTMLLIElement> {
    href?: string;
    active?: boolean;
}
/**
 * NavigationMenu component
 *
 * @example
 * ```tsx
 * <NavigationMenu>
 *   <NavigationMenuItem href="/" active>Home</NavigationMenuItem>
 *   <NavigationMenuItem href="/about">About</NavigationMenuItem>
 * </NavigationMenu>
 * ```
 */
declare const NavigationMenu: React__default.ForwardRefExoticComponent<NavigationMenuProps & React__default.RefAttributes<HTMLElement>>;
declare const NavigationMenuItem: React__default.ForwardRefExoticComponent<NavigationMenuItemProps & React__default.RefAttributes<HTMLLIElement>>;

interface PaginationProps extends Omit<React__default.HTMLAttributes<HTMLDivElement>, "onChange"> {
    /** Current page (1-indexed) */
    currentPage: number;
    /** Total number of pages */
    totalPages: number;
    /** Callback when page changes */
    onChange: (page: number) => void;
    /** Number of page buttons to show */
    siblingCount?: number;
}
/**
 * Pagination component
 *
 * @example
 * ```tsx
 * <Pagination
 *   currentPage={currentPage}
 *   totalPages={10}
 *   onChange={setCurrentPage}
 * />
 * ```
 */
declare const Pagination: React__default.ForwardRefExoticComponent<PaginationProps & React__default.RefAttributes<HTMLDivElement>>;

interface PopoverProps extends React__default.HTMLAttributes<HTMLDivElement> {
    /** Trigger element */
    trigger: React__default.ReactNode;
    /** Controlled open state */
    open?: boolean;
    /** Callback when open state changes */
    onOpenChange?: (open: boolean) => void;
}
/**
 * Popover component
 *
 * @example
 * ```tsx
 * <Popover trigger={<Button>Open</Button>}>
 *   <div className="p-4">
 *     Popover content
 *   </div>
 * </Popover>
 * ```
 */
declare const Popover: React__default.ForwardRefExoticComponent<PopoverProps & React__default.RefAttributes<HTMLDivElement>>;

type ProgressVariant = "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "error";
interface ProgressProps extends React__default.ProgressHTMLAttributes<HTMLProgressElement> {
    /** Progress variant */
    variant?: ProgressVariant;
    /** Current value (0-100) */
    value?: number;
}
/**
 * Progress component with DaisyUI styling
 *
 * @example
 * ```tsx
 * <Progress value={75} variant="primary" />
 * <Progress value={50} variant="success" max={100} />
 * ```
 */
declare const Progress: React__default.ForwardRefExoticComponent<ProgressProps & React__default.RefAttributes<HTMLProgressElement>>;

type RadioGroupVariant = "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "error" | "subtle";
type RadioGroupSize = "xs" | "sm" | "md" | "lg";
interface RadioGroupProps extends Omit<React__default.HTMLAttributes<HTMLDivElement>, "onChange"> {
    /** Group name */
    name: string;
    /** Selected value */
    value?: string;
    /** Callback when value changes */
    onChange?: (value: string) => void;
    /** Radio variant */
    variant?: RadioGroupVariant;
    /** Radio size */
    size?: RadioGroupSize;
    /** Orientation */
    orientation?: "horizontal" | "vertical";
}
interface RadioProps extends Omit<React__default.InputHTMLAttributes<HTMLInputElement>, "type" | "size"> {
    /** Radio value */
    value: string;
    /** Radio label */
    label?: string;
    /** Unique identifier for the radio */
    id?: string;
}
/**
 * RadioGroup component with DaisyUI styling
 *
 * @example
 * ```tsx
 * <RadioGroup name="option" value={value} onChange={setValue}>
 *   <Radio value="1" label="Option 1" />
 *   <Radio value="2" label="Option 2" />
 * </RadioGroup>
 * ```
 */
declare const RadioGroup: React__default.ForwardRefExoticComponent<RadioGroupProps & React__default.RefAttributes<HTMLDivElement>>;
declare const Radio: React__default.ForwardRefExoticComponent<RadioProps & React__default.RefAttributes<HTMLInputElement>>;

type SelectVariant = "bordered" | "ghost" | "floating";
type SelectColor = "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "error";
type SelectSize = "xs" | "sm" | "md" | "lg" | "xl";
interface SelectOption {
    value: string;
    label: string;
    disabled?: boolean;
    hidden?: boolean;
}
interface SelectProps extends Omit<React__default.SelectHTMLAttributes<HTMLSelectElement>, "size"> {
    /** Select variant. 'floating' uses custom UI with floating label, 'bordered' and 'ghost' use DaisyUI native select */
    variant?: SelectVariant;
    /** Select color */
    color?: SelectColor;
    /** Select size */
    size?: SelectSize;
    /** Options array */
    options?: SelectOption[];
    /** Placeholder text */
    placeholder?: string;
    /** Show custom arrow (only for floating variant) */
    showArrow?: boolean;
    /** Label text (required for floating variant, optional for others) */
    label?: string;
    /** Error message */
    error?: string;
    /** Helper text */
    helperText?: string;
    /** Default value for uncontrolled mode */
    defaultValue?: string;
    /** Full width */
    fullWidth?: boolean;
}
/**
 * Select component with DaisyUI styling and floating label support.
 *
 * Features:
 * - **Floating variant**: Custom UI with floating label that moves to top when value is selected
 * - **Bordered/Ghost variants**: Use DaisyUI's native select component for standard behavior
 * - Supports controlled and uncontrolled modes
 */
declare const Select: React__default.ForwardRefExoticComponent<SelectProps & React__default.RefAttributes<HTMLSelectElement>>;

type SeparatorOrientation = "horizontal" | "vertical";
type SeparatorVariant = "default" | "primary" | "secondary" | "accent";
interface SeparatorProps extends React__default.HTMLAttributes<HTMLDivElement> {
    /** Separator orientation */
    orientation?: SeparatorOrientation;
    /** Separator variant */
    variant?: SeparatorVariant;
    /** Text to display in separator */
    text?: string;
}
/**
 * Separator/Divider component with DaisyUI styling
 *
 * @example
 * ```tsx
 * <Separator />
 * <Separator text="OR" />
 * <Separator orientation="vertical" />
 * ```
 */
declare const Separator: React__default.ForwardRefExoticComponent<SeparatorProps & React__default.RefAttributes<HTMLDivElement>>;

type SheetPosition = "top" | "right" | "bottom" | "left";
interface SheetProps extends React__default.DialogHTMLAttributes<HTMLDialogElement> {
    /** Whether sheet is open */
    open?: boolean;
    /** Callback when sheet should close */
    onClose?: () => void;
    /** Position of sheet */
    position?: SheetPosition;
    /** Sheet title */
    title?: string;
}
/**
 * Sheet component (side modal)
 *
 * @example
 * ```tsx
 * <Sheet open={isOpen} onClose={() => setIsOpen(false)} position="right" title="Settings">
 *   <p>Sheet content goes here</p>
 * </Sheet>
 * ```
 */
declare const Sheet: React__default.ForwardRefExoticComponent<SheetProps & React__default.RefAttributes<HTMLDialogElement>>;

interface SidebarProps extends React__default.HTMLAttributes<HTMLDivElement> {
    /** Whether sidebar is collapsed */
    collapsed?: boolean;
}
interface SidebarItemProps extends React__default.HTMLAttributes<HTMLLIElement> {
    /** Item icon */
    icon?: React__default.ReactNode;
    /** Item href */
    href?: string;
    /** Whether item is active */
    active?: boolean;
}
/**
 * Sidebar navigation component
 *
 * @example
 * ```tsx
 * <Sidebar>
 *   <SidebarItem icon={<Icon />} href="/" active>Home</SidebarItem>
 *   <SidebarItem icon={<Icon />} href="/settings">Settings</SidebarItem>
 * </Sidebar>
 * ```
 */
declare const Sidebar: React__default.ForwardRefExoticComponent<SidebarProps & React__default.RefAttributes<HTMLDivElement>>;
declare const SidebarItem: React__default.ForwardRefExoticComponent<SidebarItemProps & React__default.RefAttributes<HTMLLIElement>>;

interface SkeletonProps extends React__default.HTMLAttributes<HTMLDivElement> {
    /** Width of skeleton */
    width?: string | number;
    /** Height of skeleton */
    height?: string | number;
    /** Shape of skeleton */
    shape?: "rectangle" | "circle";
}
/**
 * Skeleton loading component
 *
 * @example
 * ```tsx
 * <Skeleton width={200} height={20} />
 * <Skeleton shape="circle" width={50} height={50} />
 * ```
 */
declare const Skeleton: React__default.ForwardRefExoticComponent<SkeletonProps & React__default.RefAttributes<HTMLDivElement>>;

type SliderVariant = "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "error";
type SliderSize = "xs" | "sm" | "md" | "lg";
interface SliderProps extends Omit<React__default.InputHTMLAttributes<HTMLInputElement>, "type" | "size"> {
    /** Slider variant */
    variant?: SliderVariant;
    /** Slider size */
    size?: SliderSize;
}
/**
 * Slider/Range component with DaisyUI styling
 *
 * @example
 * ```tsx
 * <Slider variant="primary" min={0} max={100} value={50} />
 * ```
 */
declare const Slider: React__default.ForwardRefExoticComponent<SliderProps & React__default.RefAttributes<HTMLInputElement>>;

type SpinnerSize = "xs" | "sm" | "md" | "lg" | "xl";
type SpinnerType = "spinner" | "dots" | "ring" | "ball" | "bars" | "infinity";
type SpinnerColor = "primary" | "secondary" | "accent" | "neutral" | "info" | "success" | "warning" | "error";
interface SpinnerProps extends React__default.HTMLAttributes<HTMLSpanElement> {
    /** Spinner size */
    size?: SpinnerSize;
    /** Spinner animation type */
    type?: SpinnerType;
    /** Spinner color */
    color?: SpinnerColor;
}
/**
 * Spinner/Loading component with DaisyUI styling
 *
 * @example
 * ```tsx
 * <Spinner size="md" type="spinner" />
 * <Spinner size="lg" type="dots" color="primary" />
 * ```
 */
declare const Spinner: React__default.ForwardRefExoticComponent<SpinnerProps & React__default.RefAttributes<HTMLSpanElement>>;

type SwitchVariant = "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "error" | "neutral";
type SwitchSize = "xs" | "sm" | "md" | "lg" | "xl";
interface SwitchProps extends Omit<React__default.InputHTMLAttributes<HTMLInputElement>, "type" | "size"> {
    /** Switch variant */
    variant?: SwitchVariant;
    /** Switch size */
    size?: SwitchSize;
    /** Label text */
    label?: string;
    /** Icon to show when checked (enabled state) */
    checkedIcon?: React__default.ReactNode;
    /** Icon to show when unchecked (disabled state) */
    uncheckedIcon?: React__default.ReactNode;
}
/**
 * Switch/Toggle component with DaisyUI styling
 *
 * @example
 * ```tsx
 * <Switch label="Enable notifications" variant="primary" />
 * <Switch checked={true} variant="success" size="sm" />
 * <Switch checkedIcon={<CheckIcon />} uncheckedIcon={<XIcon />} />
 * ```
 */
declare const Switch: React__default.ForwardRefExoticComponent<SwitchProps & React__default.RefAttributes<HTMLInputElement>>;

type TableSize = "xs" | "sm" | "md" | "lg";
interface TableProps extends React__default.TableHTMLAttributes<HTMLTableElement> {
    /** Table size */
    size?: TableSize;
    /** Zebra stripes */
    zebra?: boolean;
    /** Pin rows */
    pinRows?: boolean;
    /** Pin columns */
    pinCols?: boolean;
}
interface DataTableColumn<T> {
    key: string;
    header: string;
    render?: (item: T) => React__default.ReactNode;
}
interface DataTableProps<T> extends Omit<TableProps, "children"> {
    /** Table data */
    data: T[];
    /** Table columns */
    columns: DataTableColumn<T>[];
    /** Row key extractor */
    getRowKey: (item: T) => string | number;
}
/**
 * Table component with DaisyUI styling
 *
 * @example
 * ```tsx
 * <Table zebra>
 *   <thead>
 *     <tr>
 *       <th>Name</th>
 *       <th>Email</th>
 *     </tr>
 *   </thead>
 *   <tbody>
 *     <tr>
 *       <td>John</td>
 *       <td>john@example.com</td>
 *     </tr>
 *   </tbody>
 * </Table>
 * ```
 */
declare const Table: React__default.ForwardRefExoticComponent<TableProps & React__default.RefAttributes<HTMLTableElement>>;
/**
 * DataTable component with built-in data rendering
 *
 * @example
 * ```tsx
 * <DataTable
 *   data={users}
 *   columns={[
 *     { key: 'name', header: 'Name' },
 *     { key: 'email', header: 'Email' },
 *   ]}
 *   getRowKey={(user) => user.id}
 * />
 * ```
 */
declare function DataTable<T extends Record<string, any>>({ data, columns, getRowKey, ...tableProps }: DataTableProps<T>): react_jsx_runtime.JSX.Element;

type TabsVariant = "bordered" | "lifted" | "boxed";
type TabsSize = "xs" | "sm" | "md" | "lg" | "xl";
type TabsPosition = "top" | "bottom";
type TabsColor = "neutral" | "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "error";
interface TabsProps extends Omit<React__default.HTMLAttributes<HTMLDivElement>, "onChange"> {
    /** Tabs variant */
    variant?: TabsVariant;
    /** Tabs size */
    size?: TabsSize;
    /** Tabs position (top or bottom) */
    position?: TabsPosition;
    /** Active tab color */
    activeColor?: TabsColor;
    /** Default active tab */
    defaultValue?: string;
    /** Controlled active tab */
    value?: string;
    /** Callback when tab changes */
    onChange?: (value: string) => void;
}
interface TabProps extends Omit<React__default.InputHTMLAttributes<HTMLInputElement>, "value" | "type"> {
    /** Tab value/id */
    value: string;
    /** Tab label */
    label: React__default.ReactNode;
    /** Disabled state */
    disabled?: boolean;
}
interface TabPanelProps extends React__default.HTMLAttributes<HTMLDivElement> {
    /** Panel value matching tab */
    value: string;
}
/**
 * Tabs component with DaisyUI styling using radio inputs for native tab-content support
 *
 * @example
 * ```tsx
 * <Tabs defaultValue="tab1">
 *   <Tab value="tab1" label="Tab 1" />
 *   <TabPanel value="tab1">Content 1</TabPanel>
 *   <Tab value="tab2" label="Tab 2" />
 *   <TabPanel value="tab2">Content 2</TabPanel>
 * </Tabs>
 * ```
 */
declare const Tabs: React__default.ForwardRefExoticComponent<TabsProps & React__default.RefAttributes<HTMLDivElement>>;
declare const Tab: React__default.ForwardRefExoticComponent<TabProps & React__default.RefAttributes<HTMLInputElement>>;
declare const TabPanel: React__default.ForwardRefExoticComponent<TabPanelProps & React__default.RefAttributes<HTMLDivElement>>;

type TextareaVariant = "bordered" | "ghost" | "floating";
type TextareaColor = "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "error";
type TextareaSize = "xs" | "sm" | "md" | "lg";
interface TextareaProps extends React__default.TextareaHTMLAttributes<HTMLTextAreaElement> {
    /** Textarea variant */
    variant?: TextareaVariant;
    /** Textarea color */
    color?: TextareaColor;
    /** Textarea size */
    size?: TextareaSize;
    /** Label for floating variant */
    label?: string;
    /** Error message */
    error?: string;
    /** Helper text */
    helperText?: string;
}
/**
 * Textarea component with DaisyUI styling
 *
 * @example
 * ```tsx
 * <Textarea variant="bordered" placeholder="Enter text..." />
 * <Textarea color="primary" rows={5} />
 * <Textarea variant="floating" label="Message" placeholder="Enter message..." />
 * ```
 */
declare const Textarea: React__default.ForwardRefExoticComponent<TextareaProps & React__default.RefAttributes<HTMLTextAreaElement>>;

type ToastPosition = "top" | "top-start" | "top-center" | "top-end" | "middle" | "middle-start" | "middle-center" | "middle-end" | "bottom" | "bottom-start" | "bottom-center" | "bottom-end";
type ToastVariant = "info" | "success" | "warning" | "error";
interface Toast {
    id: string;
    message: string;
    variant?: ToastVariant;
    duration?: number;
}
interface ToastProps extends React__default.HTMLAttributes<HTMLDivElement> {
    /** Toast variant */
    variant?: ToastVariant;
    /** Auto-dismiss duration (ms) */
    duration?: number;
    /** Callback when toast is dismissed */
    onDismiss?: () => void;
}
interface ToastContextValue {
    toasts: Toast[];
    addToast: (toast: Omit<Toast, "id">) => void;
    removeToast: (id: string) => void;
}
declare const useToast: () => ToastContextValue;
/**
 * Toast notification component
 */
declare const ToastItem: React__default.ForwardRefExoticComponent<ToastProps & {
    message: string;
} & React__default.RefAttributes<HTMLDivElement>>;
/**
 * ToastProvider component - wrap your app with this
 */
interface ToastProviderProps {
    children: React__default.ReactNode;
    position?: ToastPosition;
}
declare const ToastProvider: React__default.FC<ToastProviderProps>;

type ToggleSize = "xs" | "sm" | "md" | "lg";
type ToggleVariant = "primary" | "secondary" | "accent";
interface ToggleProps extends Omit<React__default.ButtonHTMLAttributes<HTMLButtonElement>, "onChange"> {
    /** Whether toggle is pressed */
    pressed?: boolean;
    /** Callback when pressed state changes */
    onPressedChange?: (pressed: boolean) => void;
    /** Toggle size */
    size?: ToggleSize;
    /** Toggle variant */
    variant?: ToggleVariant;
}
interface ToggleGroupProps extends Omit<React__default.HTMLAttributes<HTMLDivElement>, "onChange"> {
    /** Toggle type - single or multiple */
    type: "single" | "multiple";
    /** Selected value(s) */
    value?: string | string[];
    /** Callback when value changes */
    onChange?: (value: string | string[]) => void;
    /** Toggle size */
    size?: ToggleSize;
    /** Toggle variant */
    variant?: ToggleVariant;
}
interface ToggleGroupItemProps extends Omit<React__default.ButtonHTMLAttributes<HTMLButtonElement>, "value"> {
    /** Item value */
    value: string;
}
/**
 * Toggle button component
 *
 * @example
 * ```tsx
 * <Toggle pressed={isPressed} onPressedChange={setIsPressed}>
 *   Toggle me
 * </Toggle>
 * ```
 */
declare const Toggle: React__default.ForwardRefExoticComponent<ToggleProps & React__default.RefAttributes<HTMLButtonElement>>;
/**
 * ToggleGroup component for multiple toggle buttons
 *
 * @example
 * ```tsx
 * <ToggleGroup type="single" value={value} onChange={setValue}>
 *   <ToggleGroupItem value="left">Left</ToggleGroupItem>
 *   <ToggleGroupItem value="center">Center</ToggleGroupItem>
 *   <ToggleGroupItem value="right">Right</ToggleGroupItem>
 * </ToggleGroup>
 * ```
 */
declare const ToggleGroup: React__default.ForwardRefExoticComponent<ToggleGroupProps & React__default.RefAttributes<HTMLDivElement>>;
declare const ToggleGroupItem: React__default.ForwardRefExoticComponent<ToggleGroupItemProps & React__default.RefAttributes<HTMLButtonElement>>;

type TooltipPosition = "top" | "bottom" | "left" | "right";
type TooltipVariant = "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "error";
interface TooltipProps extends React__default.HTMLAttributes<HTMLDivElement> {
    /** Tooltip content */
    content: string;
    /** Tooltip position */
    position?: TooltipPosition;
    /** Tooltip variant */
    variant?: TooltipVariant;
    /** Always show tooltip */
    open?: boolean;
}
/**
 * Tooltip component with DaisyUI styling
 *
 * @example
 * ```tsx
 * <Tooltip content="This is a tooltip" position="top">
 *   <Button>Hover me</Button>
 * </Tooltip>
 * ```
 */
declare const Tooltip: React__default.ForwardRefExoticComponent<TooltipProps & React__default.RefAttributes<HTMLDivElement>>;

type TypographyVariant = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "blockquote" | "code" | "lead" | "large" | "small" | "muted";
interface TypographyProps extends React__default.HTMLAttributes<HTMLElement> {
    /** Typography variant */
    variant?: TypographyVariant;
    /** HTML element to render */
    as?: React__default.ElementType;
}
/**
 * Typography component for consistent text styling
 *
 * @example
 * ```tsx
 * <Typography variant="h1">Heading 1</Typography>
 * <Typography variant="p">Paragraph text</Typography>
 * <Typography variant="muted">Muted text</Typography>
 * ```
 */
declare const Typography: React__default.ForwardRefExoticComponent<TypographyProps & React__default.RefAttributes<HTMLElement>>;

export { Accordion, type AccordionIconPosition, AccordionItem, type AccordionItemProps, type AccordionProps, type AccordionVariant, Alert, AlertDescription, type AlertDescriptionProps, AlertDialog, type AlertDialogProps, type AlertProps, AlertTitle, type AlertTitleProps, type AlertVariant, AmountField, type AmountFieldColor, type AmountFieldProps, type AmountFieldSize, type AmountFieldVariant, Avatar, AvatarGroup, type AvatarGroupProps, type AvatarProps, type AvatarSize, type AvatarStatus, Badge, type BadgeProps, type BadgeSize, type BadgeVariant, Breadcrumb, BreadcrumbItem, type BreadcrumbItemProps, type BreadcrumbProps, Button, type ButtonAsButtonProps, type ButtonAsLinkProps, ButtonGroup, type ButtonGroupProps, type ButtonProps, type ButtonShape, type ButtonSize, type ButtonVariant, Calendar, type CalendarProps, Card, CardActions, type CardActionsProps, CardBody, type CardBodyProps, type CardProps, CardTitle, type CardTitleProps, type CardVariant, Checkbox, type CheckboxProps, type CheckboxSize, type CheckboxVariant, Collapsible, type CollapsibleProps, Combobox, type ComboboxOption, type ComboboxProps, type ComboboxVariant, Command, CommandGroup, type CommandGroupProps, CommandItem, type CommandItemProps, type CommandProps, ContextMenu, type ContextMenuItem, type ContextMenuProps, ControlledDynamicFormField, type ControlledDynamicFormFieldProps, DataTable, type DataTableColumn, type DataTableColumnDef, type DataTableProps, type DataTableSize, type DataTableSortState, type DateFormat, type DateInfo, DateInput, type DateInputColor, type DateInputProps, type DateInputSize, type DateInputVariant, DatePicker, type DatePickerColor, type DatePickerFormat, type DatePickerProps, type DatePickerSize, type DatePickerVariant, Dialog, DialogActions, type DialogActionsProps, DialogCloseButton, type DialogCloseButtonProps, DialogDescription, type DialogDescriptionProps, type DialogHorizontalPosition, type DialogPosition, type DialogProps, type DialogSize, DialogTitle, type DialogTitleProps, type DialogVerticalPosition, Drawer, type DrawerPosition, type DrawerProps, Dropdown, DropdownMenu, type DropdownMenuProps, type DropdownPosition, type DynamicFieldConfig, type DynamicFieldOption, type DynamicFieldType, type DynamicFieldValidation, DynamicForm, DynamicFormField, type DynamicFormFieldProps, type DynamicFormProps, Empty, type EmptyProps, Field, FieldDescription, type FieldDescriptionProps, FieldError, type FieldErrorProps, FieldGroup, type FieldGroupProps, FieldLabel, type FieldLabelProps, FieldLegend, type FieldLegendProps, type FieldProps, FieldSeparator, type FieldSeparatorProps, FieldSet, type FieldSetProps, Form, FormActions, type FormActionsProps, FormControl, type FormControlProps, FormDescription, type FormDescriptionProps, FormField, type FormFieldProps, FormItem, type FormItemProps, FormLabel, type FormLabelProps, FormMessage, type FormMessageProps, type FormProps, FormSection, type FormSectionProps, FullPageLoader, type FullPageLoaderProps, type FullPageLoaderSize, type FullPageLoaderType, type FullPageLoaderVariant, HoverCard, type HoverCardProps, Input, type InputColor, InputGroup, type InputGroupProps, InputOTP, type InputOTPProps, type InputProps, type InputSize, type InputVariant, Item, type ItemProps, Kbd, type KbdProps, type KbdSize, Label, type LabelProps, type LinkComponentProps, Menubar, MenubarItem, type MenubarItemProps, type MenubarOrientation, type MenubarProps, type MenubarSize, NativeSelect, type NativeSelectColor, type NativeSelectProps, type NativeSelectSize, type NativeSelectVariant, Navbar, NavbarCenter, type NavbarCenterProps, type NavbarColor, NavbarEnd, type NavbarEndProps, type NavbarProps, NavbarStart, type NavbarStartProps, NavigationMenu, NavigationMenuItem, type NavigationMenuItemProps, type NavigationMenuProps, Pagination, type PaginationProps, type PaginationVariant, Popover, type PopoverProps, Progress, type ProgressProps, type ProgressVariant, Radio, RadioGroup, type RadioGroupProps, type RadioGroupSize, type RadioGroupVariant, type RadioProps, Select, type SelectColor, type SelectOption, type SelectProps, type SelectSize, type SelectVariant, Separator, type SeparatorOrientation, type SeparatorProps, type SeparatorVariant, Sheet, type SheetPosition, type SheetProps, Sidebar, SidebarItem, type SidebarItemProps, type SidebarProps, Skeleton, type SkeletonProps, Slider, type SliderProps, type SliderSize, type SliderVariant, type SortDirection, SortableDataTable, type SortableDataTableProps, Spinner, type SpinnerProps, type SpinnerSize, type SpinnerType, Switch, type SwitchProps, type SwitchSize, type SwitchVariant, Tab, TabPanel, type TabPanelProps, type TabProps, Table, type TableProps, type TableSize, Tabs, type TabsPosition, type TabsProps, type TabsSize, type TabsVariant, Textarea, type TextareaColor, type TextareaProps, type TextareaSize, type TextareaVariant, ToastItem, type ToastPosition, type ToastProps, ToastProvider, type ToastProviderProps, type ToastVariant, Toggle, ToggleGroup, ToggleGroupItem, type ToggleGroupItemProps, type ToggleGroupProps, type ToggleProps, type ToggleSize, type ToggleVariant, Tooltip, type TooltipPosition, type TooltipProps, type TooltipVariant, Typography, type TypographyProps, type TypographyVariant, useToast };
