import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";

// Component Pages
import { AccordionPage } from "./pages/AccordionPage";
import { AlertDialogPage } from "./pages/AlertDialogPage";
import { AlertPage } from "./pages/AlertPage";
import { AmountFieldPage } from "./pages/AmountFieldPage";
import { AvatarPage } from "./pages/AvatarPage";
import { BadgePage } from "./pages/BadgePage";
import { BreadcrumbPage } from "./pages/BreadcrumbPage";
import { ButtonGroupPage } from "./pages/ButtonGroupPage";
import { ButtonPage } from "./pages/ButtonPage";
import { CalendarPage } from "./pages/CalendarPage";
import { CardPage } from "./pages/CardPage";
import { CheckboxPage } from "./pages/CheckboxPage";
import { CollapsiblePage } from "./pages/CollapsiblePage";
import { ComboboxPage } from "./pages/ComboboxPage";
import { CommandPage } from "./pages/CommandPage";
import { ContextMenuPage } from "./pages/ContextMenuPage";
import { DataTablePage } from "./pages/DataTablePage";
import { DateInputPage } from "./pages/DateInputPage";
import { DatePickerPage } from "./pages/DatePickerPage";
import { DialogPage } from "./pages/DialogPage";
import { DrawerPage } from "./pages/DrawerPage";
import { DropdownMenuPage } from "./pages/DropdownMenuPage";
import { DynamicFormPage } from "./pages/DynamicFormPage";
import { EmptyPage } from "./pages/EmptyPage";
import { FieldPage } from "./pages/FieldPage";
import { FormPage } from "./pages/FormPage";
import { FullPageLoaderPage } from "./pages/FullPageLoaderPage";
import { HoverCardPage } from "./pages/HoverCardPage";
import { InputGroupPage } from "./pages/InputGroupPage";
import { InputOTPPage } from "./pages/InputOTPPage";
import { InputPage } from "./pages/InputPage";
import { ItemPage } from "./pages/ItemPage";
import { KbdPage } from "./pages/KbdPage";
import { LabelPage } from "./pages/LabelPage";
import { MenubarPage } from "./pages/MenubarPage";
import { NativeSelectPage } from "./pages/NativeSelectPage";
import { NavbarPage } from "./pages/NavbarPage";
import { NavigationMenuPage } from "./pages/NavigationMenuPage";
import { PaginationPage } from "./pages/PaginationPage";
import { PopoverPage } from "./pages/PopoverPage";
import { ProgressPage } from "./pages/ProgressPage";
import { RadioGroupPage } from "./pages/RadioGroupPage";
import { SelectPage } from "./pages/SelectPage";
import { SeparatorPage } from "./pages/SeparatorPage";
import { SheetPage } from "./pages/SheetPage";
import { SidebarPage } from "./pages/SidebarPage";
import { SkeletonPage } from "./pages/SkeletonPage";
import { SliderPage } from "./pages/SliderPage";
import { SpinnerPage } from "./pages/SpinnerPage";
import { SwitchPage } from "./pages/SwitchPage";
import { TablePage } from "./pages/TablePage";
import { TabsPage } from "./pages/TabsPage";
import { TextareaPage } from "./pages/TextareaPage";
import { ToastPage } from "./pages/ToastPage";
import { TogglePage } from "./pages/TogglePage";
import { TooltipPage } from "./pages/TooltipPage";
import { TypographyPage } from "./pages/TypographyPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        {/* A-B */}
        <Route path="accordion" element={<AccordionPage />} />
        <Route path="alert" element={<AlertPage />} />
        <Route path="alert-dialog" element={<AlertDialogPage />} />
        <Route path="amount-field" element={<AmountFieldPage />} />
        <Route path="avatar" element={<AvatarPage />} />
        <Route path="badge" element={<BadgePage />} />
        <Route path="breadcrumb" element={<BreadcrumbPage />} />
        <Route path="button" element={<ButtonPage />} />
        <Route path="button-group" element={<ButtonGroupPage />} />
        {/* C */}
        <Route path="calendar" element={<CalendarPage />} />
        <Route path="card" element={<CardPage />} />
        <Route path="checkbox" element={<CheckboxPage />} />
        <Route path="collapsible" element={<CollapsiblePage />} />
        <Route path="combobox" element={<ComboboxPage />} />
        <Route path="command" element={<CommandPage />} />
        <Route path="context-menu" element={<ContextMenuPage />} />
        {/* D-F */}
        <Route path="data-table" element={<DataTablePage />} />
        <Route path="date-input" element={<DateInputPage />} />
        <Route path="date-picker" element={<DatePickerPage />} />
        <Route path="dialog" element={<DialogPage />} />
        <Route path="drawer" element={<DrawerPage />} />
        <Route path="dropdown-menu" element={<DropdownMenuPage />} />
        <Route path="dynamic-form" element={<DynamicFormPage />} />
        <Route path="empty" element={<EmptyPage />} />
        <Route path="field" element={<FieldPage />} />
        <Route path="form" element={<FormPage />} />
        <Route path="full-page-loader" element={<FullPageLoaderPage />} />
        {/* H-L */}
        <Route path="hover-card" element={<HoverCardPage />} />
        <Route path="input" element={<InputPage />} />
        <Route path="input-group" element={<InputGroupPage />} />
        <Route path="input-otp" element={<InputOTPPage />} />
        <Route path="item" element={<ItemPage />} />
        <Route path="kbd" element={<KbdPage />} />
        <Route path="label" element={<LabelPage />} />
        {/* M-P */}
        <Route path="menubar" element={<MenubarPage />} />
        <Route path="navbar" element={<NavbarPage />} />
        <Route path="native-select" element={<NativeSelectPage />} />
        <Route path="navigation-menu" element={<NavigationMenuPage />} />
        <Route path="pagination" element={<PaginationPage />} />
        <Route path="popover" element={<PopoverPage />} />
        <Route path="progress" element={<ProgressPage />} />
        {/* R-S */}
        <Route path="radio-group" element={<RadioGroupPage />} />
        <Route path="select" element={<SelectPage />} />
        <Route path="separator" element={<SeparatorPage />} />
        <Route path="sheet" element={<SheetPage />} />
        <Route path="sidebar" element={<SidebarPage />} />
        <Route path="skeleton" element={<SkeletonPage />} />
        <Route path="slider" element={<SliderPage />} />
        <Route path="spinner" element={<SpinnerPage />} />
        <Route path="switch" element={<SwitchPage />} />
        {/* T */}
        <Route path="table" element={<TablePage />} />
        <Route path="tabs" element={<TabsPage />} />
        <Route path="textarea" element={<TextareaPage />} />
        <Route path="toast" element={<ToastPage />} />
        <Route path="toggle" element={<TogglePage />} />
        <Route path="tooltip" element={<TooltipPage />} />
        <Route path="typography" element={<TypographyPage />} />
      </Route>
    </Routes>
  );
}

export default App;
