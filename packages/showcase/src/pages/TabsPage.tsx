import { Tab, TabPanel, Tabs } from "@shared-ui-library/react";
import { useState } from "react";
import { ComponentPage, ShowcaseSection } from "../components/ComponentPage";

export function TabsPage() {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <ComponentPage
      title="Tabs"
      description="A set of layered sections of content, known as tab panels."
    >
      <ShowcaseSection title="Default">
        <Tabs value={activeTab} onChange={setActiveTab}>
          <Tab value="tab1" label="Account" />
          <TabPanel value="tab1">
            <div className="bg-base-200 rounded-lg p-4">
              <h3 className="mb-2 font-bold">Account Settings</h3>
              <p>Manage your account information here.</p>
            </div>
          </TabPanel>
          <Tab value="tab2" label="Password" />
          <TabPanel value="tab2">
            <div className="bg-base-200 rounded-lg p-4">
              <h3 className="mb-2 font-bold">Password Settings</h3>
              <p>Change your password and security settings.</p>
            </div>
          </TabPanel>
          <Tab value="tab3" label="Settings" />
          <TabPanel value="tab3">
            <div className="bg-base-200 rounded-lg p-4">
              <h3 className="mb-2 font-bold">General Settings</h3>
              <p>Configure general application settings.</p>
            </div>
          </TabPanel>
        </Tabs>
      </ShowcaseSection>

      <ShowcaseSection title="Variants">
        <div className="w-full space-y-6">
          <div>
            <p className="mb-2 text-sm font-semibold">Bordered</p>
            <Tabs defaultValue="a" variant="bordered">
              <Tab value="a" label="Tab 1" />
              <TabPanel value="a">
                <p className="text-sm">Content for Tab 1 with bordered variant.</p>
              </TabPanel>
              <Tab value="b" label="Tab 2" />
              <TabPanel value="b">
                <p className="text-sm">Content for Tab 2 with bordered variant.</p>
              </TabPanel>
              <Tab value="c" label="Tab 3" />
              <TabPanel value="c">
                <p className="text-sm">Content for Tab 3 with bordered variant.</p>
              </TabPanel>
            </Tabs>
          </div>
          <div>
            <p className="mb-2 text-sm font-semibold">Lifted</p>
            <Tabs defaultValue="a" variant="lifted">
              <Tab value="a" label="Tab 1" />
              <TabPanel value="a">
                <p className="text-sm">Content for Tab 1 with lifted variant.</p>
              </TabPanel>
              <Tab value="b" label="Tab 2" />
              <TabPanel value="b">
                <p className="text-sm">Content for Tab 2 with lifted variant.</p>
              </TabPanel>
              <Tab value="c" label="Tab 3" />
              <TabPanel value="c">
                <p className="text-sm">Content for Tab 3 with lifted variant.</p>
              </TabPanel>
            </Tabs>
          </div>
          <div>
            <p className="mb-2 text-sm font-semibold">Boxed</p>
            <Tabs defaultValue="a" variant="boxed">
              <Tab value="a" label="Tab 1" />
              <TabPanel value="a">
                <p className="text-sm">Content for Tab 1 with boxed variant.</p>
              </TabPanel>
              <Tab value="b" label="Tab 2" />
              <TabPanel value="b">
                <p className="text-sm">Content for Tab 2 with boxed variant.</p>
              </TabPanel>
              <Tab value="c" label="Tab 3" />
              <TabPanel value="c">
                <p className="text-sm">Content for Tab 3 with boxed variant.</p>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Sizes">
        <div className="w-full space-y-6">
          <div>
            <p className="mb-2 text-sm font-semibold">Extra Small (xs)</p>
            <Tabs defaultValue="a" size="xs">
              <Tab value="a" label="Tab 1" />
              <TabPanel value="a">
                <p className="text-sm">Content for Tab 1 - extra small size.</p>
              </TabPanel>
              <Tab value="b" label="Tab 2" />
              <TabPanel value="b">
                <p className="text-sm">Content for Tab 2 - extra small size.</p>
              </TabPanel>
              <Tab value="c" label="Tab 3" />
              <TabPanel value="c">
                <p className="text-sm">Content for Tab 3 - extra small size.</p>
              </TabPanel>
            </Tabs>
          </div>
          <div>
            <p className="mb-2 text-sm font-semibold">Small (sm)</p>
            <Tabs defaultValue="a" size="sm">
              <Tab value="a" label="Tab 1" />
              <TabPanel value="a">
                <p className="text-sm">Content for Tab 1 - small size.</p>
              </TabPanel>
              <Tab value="b" label="Tab 2" />
              <TabPanel value="b">
                <p className="text-sm">Content for Tab 2 - small size.</p>
              </TabPanel>
              <Tab value="c" label="Tab 3" />
              <TabPanel value="c">
                <p className="text-sm">Content for Tab 3 - small size.</p>
              </TabPanel>
            </Tabs>
          </div>
          <div>
            <p className="mb-2 text-sm font-semibold">Medium (md) - Default</p>
            <Tabs defaultValue="a" size="md">
              <Tab value="a" label="Tab 1" />
              <TabPanel value="a">
                <p className="text-sm">Content for Tab 1 - medium size.</p>
              </TabPanel>
              <Tab value="b" label="Tab 2" />
              <TabPanel value="b">
                <p className="text-sm">Content for Tab 2 - medium size.</p>
              </TabPanel>
              <Tab value="c" label="Tab 3" />
              <TabPanel value="c">
                <p className="text-sm">Content for Tab 3 - medium size.</p>
              </TabPanel>
            </Tabs>
          </div>
          <div>
            <p className="mb-2 text-sm font-semibold">Large (lg)</p>
            <Tabs defaultValue="a" size="lg">
              <Tab value="a" label="Tab 1" />
              <TabPanel value="a">
                <p className="text-sm">Content for Tab 1 - large size.</p>
              </TabPanel>
              <Tab value="b" label="Tab 2" />
              <TabPanel value="b">
                <p className="text-sm">Content for Tab 2 - large size.</p>
              </TabPanel>
              <Tab value="c" label="Tab 3" />
              <TabPanel value="c">
                <p className="text-sm">Content for Tab 3 - large size.</p>
              </TabPanel>
            </Tabs>
          </div>
          <div>
            <p className="mb-2 text-sm font-semibold">Extra Large (xl)</p>
            <Tabs defaultValue="a" size="xl">
              <Tab value="a" label="Tab 1" />
              <TabPanel value="a">
                <p className="text-sm">Content for Tab 1 - extra large size.</p>
              </TabPanel>
              <Tab value="b" label="Tab 2" />
              <TabPanel value="b">
                <p className="text-sm">Content for Tab 2 - extra large size.</p>
              </TabPanel>
              <Tab value="c" label="Tab 3" />
              <TabPanel value="c">
                <p className="text-sm">Content for Tab 3 - extra large size.</p>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Disabled Tabs">
        <Tabs defaultValue="tab1">
          <Tab value="tab1" label="Active" />
          <TabPanel value="tab1">
            <p className="text-sm">This tab is active and working.</p>
          </TabPanel>
          <Tab value="tab2" label="Disabled" disabled />
          <TabPanel value="tab2">
            <p className="text-sm">This content won't be accessible because the tab is disabled.</p>
          </TabPanel>
          <Tab value="tab3" label="Also Disabled" disabled />
          <TabPanel value="tab3">
            <p className="text-sm">
              This content also won't be accessible because the tab is disabled.
            </p>
          </TabPanel>
        </Tabs>
      </ShowcaseSection>

      <ShowcaseSection title="With Tab Content">
        <div className="w-full space-y-8">
          <div>
            <p className="mb-3 text-sm font-semibold">Bordered with Content</p>
            <Tabs defaultValue="tab1" variant="bordered">
              <Tab value="tab1" label="Profile" />
              <TabPanel value="tab1">
                <div className="bg-base-200 rounded-lg p-6">
                  <h4 className="mb-2 text-lg font-bold">Profile Information</h4>
                  <p className="text-sm">View and edit your profile details.</p>
                </div>
              </TabPanel>
              <Tab value="tab2" label="Documents" />
              <TabPanel value="tab2">
                <div className="bg-base-200 rounded-lg p-6">
                  <h4 className="mb-2 text-lg font-bold">Your Documents</h4>
                  <p className="text-sm">Access all your uploaded documents.</p>
                </div>
              </TabPanel>
              <Tab value="tab3" label="Settings" />
              <TabPanel value="tab3">
                <div className="bg-base-200 rounded-lg p-6">
                  <h4 className="mb-2 text-lg font-bold">Settings Panel</h4>
                  <p className="text-sm">Configure your preferences.</p>
                </div>
              </TabPanel>
            </Tabs>
          </div>

          <div>
            <p className="mb-3 text-sm font-semibold">Lifted with Content</p>
            <Tabs defaultValue="tab1" variant="lifted">
              <Tab value="tab1" label="Dashboard" />
              <TabPanel value="tab1">
                <div className="bg-base-200 rounded-lg p-6">
                  <h4 className="mb-2 text-lg font-bold">Dashboard Overview</h4>
                  <p className="text-sm">View your dashboard metrics and insights.</p>
                </div>
              </TabPanel>
              <Tab value="tab2" label="Analytics" />
              <TabPanel value="tab2">
                <div className="bg-base-200 rounded-lg p-6">
                  <h4 className="mb-2 text-lg font-bold">Analytics Data</h4>
                  <p className="text-sm">Detailed analytics and statistics.</p>
                </div>
              </TabPanel>
              <Tab value="tab3" label="Reports" />
              <TabPanel value="tab3">
                <div className="bg-base-200 rounded-lg p-6">
                  <h4 className="mb-2 text-lg font-bold">Report Generation</h4>
                  <p className="text-sm">Generate and download reports.</p>
                </div>
              </TabPanel>
            </Tabs>
          </div>

          <div>
            <p className="mb-3 text-sm font-semibold">Boxed with Content</p>
            <Tabs defaultValue="tab1" variant="boxed">
              <Tab value="tab1" label="Overview" />
              <TabPanel value="tab1">
                <div className="bg-base-200 rounded-lg p-6">
                  <h4 className="mb-2 text-lg font-bold">Overview Section</h4>
                  <p className="text-sm">Quick overview of key information.</p>
                </div>
              </TabPanel>
              <Tab value="tab2" label="Details" />
              <TabPanel value="tab2">
                <div className="bg-base-200 rounded-lg p-6">
                  <h4 className="mb-2 text-lg font-bold">Detailed View</h4>
                  <p className="text-sm">Comprehensive details and information.</p>
                </div>
              </TabPanel>
              <Tab value="tab3" label="History" />
              <TabPanel value="tab3">
                <div className="bg-base-200 rounded-lg p-6">
                  <h4 className="mb-2 text-lg font-bold">History Log</h4>
                  <p className="text-sm">View historical data and changes.</p>
                </div>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Position Bottom">
        <div className="w-full space-y-6">
          <div>
            <p className="mb-3 text-sm font-semibold">Tabs at Bottom</p>
            <Tabs defaultValue="tab1" variant="lifted" position="bottom">
              <Tab value="tab1" label="First" />
              <TabPanel value="tab1">
                <div className="bg-base-200 rounded-lg p-6">
                  <h4 className="mb-2 text-lg font-bold">Content First</h4>
                  <p className="text-sm">When tabs are at the bottom, content appears first.</p>
                </div>
              </TabPanel>
              <Tab value="tab2" label="Second" />
              <TabPanel value="tab2">
                <div className="bg-base-200 rounded-lg p-6">
                  <h4 className="mb-2 text-lg font-bold">Second Panel</h4>
                  <p className="text-sm">This is the second tab content.</p>
                </div>
              </TabPanel>
              <Tab value="tab3" label="Third" />
              <TabPanel value="tab3">
                <div className="bg-base-200 rounded-lg p-6">
                  <h4 className="mb-2 text-lg font-bold">Third Panel</h4>
                  <p className="text-sm">This is the third tab content.</p>
                </div>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="With Icons">
        <Tabs defaultValue="live" variant="lifted">
          <Tab value="live" label="🎥 Live" />
          <TabPanel value="live">
            <div className="bg-base-200 rounded-lg p-6">
              <h4 className="mb-2 text-lg font-bold">Live Content</h4>
              <p className="text-sm">Watch live streams and broadcasts.</p>
            </div>
          </TabPanel>
          <Tab value="laugh" label="😄 Laugh" />
          <TabPanel value="laugh">
            <div className="bg-base-200 rounded-lg p-6">
              <h4 className="mb-2 text-lg font-bold">Comedy Content</h4>
              <p className="text-sm">Enjoy funny videos and entertainment.</p>
            </div>
          </TabPanel>
          <Tab value="love" label="❤️ Love" />
          <TabPanel value="love">
            <div className="bg-base-200 rounded-lg p-6">
              <h4 className="mb-2 text-lg font-bold">Favorite Content</h4>
              <p className="text-sm">Your most loved and saved content.</p>
            </div>
          </TabPanel>
        </Tabs>
      </ShowcaseSection>

      <ShowcaseSection title="Custom Colors">
        <div className="w-full space-y-6">
          <Tabs defaultValue="tab1" variant="lifted">
            <Tab
              value="tab1"
              label="Primary"
              className="[--tab-bg:hsl(var(--p))] [--tab-border-color:hsl(var(--p))]"
            />
            <TabPanel value="tab1">
              <div className="bg-primary text-primary-content rounded-lg p-6">
                <h4 className="mb-2 text-lg font-bold">Primary Theme</h4>
                <p className="text-sm">Content with primary color theme.</p>
              </div>
            </TabPanel>
            <Tab
              value="tab2"
              label="Secondary"
              className="[--tab-bg:hsl(var(--s))] [--tab-border-color:hsl(var(--s))]"
            />
            <TabPanel value="tab2">
              <div className="bg-secondary text-secondary-content rounded-lg p-6">
                <h4 className="mb-2 text-lg font-bold">Secondary Theme</h4>
                <p className="text-sm">Content with secondary color theme.</p>
              </div>
            </TabPanel>
            <Tab
              value="tab3"
              label="Accent"
              className="[--tab-bg:hsl(var(--a))] [--tab-border-color:hsl(var(--a))]"
            />
            <TabPanel value="tab3">
              <div className="bg-accent text-accent-content rounded-lg p-6">
                <h4 className="mb-2 text-lg font-bold">Accent Theme</h4>
                <p className="text-sm">Content with accent color theme.</p>
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Active Tab Colors">
        <div className="w-full space-y-8">
          <div>
            <p className="mb-3 text-sm font-semibold">Primary Color</p>
            <Tabs defaultValue="tab1" variant="bordered" activeColor="primary">
              <Tab value="tab1" label="Home" />
              <TabPanel value="tab1">
                <p className="text-sm">Active tab displayed in primary color.</p>
              </TabPanel>
              <Tab value="tab2" label="Profile" />
              <TabPanel value="tab2">
                <p className="text-sm">Switch to see the primary color on active tab.</p>
              </TabPanel>
              <Tab value="tab3" label="Settings" />
              <TabPanel value="tab3">
                <p className="text-sm">Primary color styling for active state.</p>
              </TabPanel>
            </Tabs>
          </div>

          <div>
            <p className="mb-3 text-sm font-semibold">Secondary Color</p>
            <Tabs defaultValue="tab1" variant="lifted" activeColor="secondary">
              <Tab value="tab1" label="Dashboard" />
              <TabPanel value="tab1">
                <p className="text-sm">Active tab displayed in secondary color.</p>
              </TabPanel>
              <Tab value="tab2" label="Analytics" />
              <TabPanel value="tab2">
                <p className="text-sm">The active tab uses secondary color theme.</p>
              </TabPanel>
              <Tab value="tab3" label="Reports" />
              <TabPanel value="tab3">
                <p className="text-sm">Secondary color for active tab indicator.</p>
              </TabPanel>
            </Tabs>
          </div>

          <div>
            <p className="mb-3 text-sm font-semibold">Success Color</p>
            <Tabs defaultValue="tab1" variant="boxed" activeColor="success">
              <Tab value="tab1" label="✓ Completed" />
              <TabPanel value="tab1">
                <p className="text-sm">Active tab shown in success color (green).</p>
              </TabPanel>
              <Tab value="tab2" label="In Progress" />
              <TabPanel value="tab2">
                <p className="text-sm">Success color highlights active tab status.</p>
              </TabPanel>
              <Tab value="tab3" label="Pending" />
              <TabPanel value="tab3">
                <p className="text-sm">Green color indicates successful/active state.</p>
              </TabPanel>
            </Tabs>
          </div>

          <div>
            <p className="mb-3 text-sm font-semibold">Warning Color</p>
            <Tabs defaultValue="tab1" variant="lifted" activeColor="warning">
              <Tab value="tab1" label="⚠ Warning" />
              <TabPanel value="tab1">
                <p className="text-sm">Active tab displayed in warning color (amber).</p>
              </TabPanel>
              <Tab value="tab2" label="Alerts" />
              <TabPanel value="tab2">
                <p className="text-sm">Warning color for active tab display.</p>
              </TabPanel>
              <Tab value="tab3" label="Notifications" />
              <TabPanel value="tab3">
                <p className="text-sm">Amber/warning color active state indicator.</p>
              </TabPanel>
            </Tabs>
          </div>

          <div>
            <p className="mb-3 text-sm font-semibold">Error Color</p>
            <Tabs defaultValue="tab1" variant="bordered" activeColor="error">
              <Tab value="tab1" label="✕ Error" />
              <TabPanel value="tab1">
                <p className="text-sm">Active tab displayed in error color (red).</p>
              </TabPanel>
              <Tab value="tab2" label="Issues" />
              <TabPanel value="tab2">
                <p className="text-sm">Error color highlights the active tab.</p>
              </TabPanel>
              <Tab value="tab3" label="Problems" />
              <TabPanel value="tab3">
                <p className="text-sm">Red error color for active tab status.</p>
              </TabPanel>
            </Tabs>
          </div>

          <div>
            <p className="mb-3 text-sm font-semibold">Info Color</p>
            <Tabs defaultValue="tab1" variant="boxed" activeColor="info">
              <Tab value="tab1" label="ℹ Info" />
              <TabPanel value="tab1">
                <p className="text-sm">Active tab in info color (blue).</p>
              </TabPanel>
              <Tab value="tab2" label="Details" />
              <TabPanel value="tab2">
                <p className="text-sm">Info color for active tab display.</p>
              </TabPanel>
              <Tab value="tab3" label="More" />
              <TabPanel value="tab3">
                <p className="text-sm">Blue info color active state styling.</p>
              </TabPanel>
            </Tabs>
          </div>

          <div>
            <p className="mb-3 text-sm font-semibold">Accent Color</p>
            <Tabs defaultValue="tab1" variant="lifted" activeColor="accent">
              <Tab value="tab1" label="Featured" />
              <TabPanel value="tab1">
                <p className="text-sm">Active tab in accent color.</p>
              </TabPanel>
              <Tab value="tab2" label="Promoted" />
              <TabPanel value="tab2">
                <p className="text-sm">Accent color highlights the active tab.</p>
              </TabPanel>
              <Tab value="tab3" label="Special" />
              <TabPanel value="tab3">
                <p className="text-sm">Accent color for active state display.</p>
              </TabPanel>
            </Tabs>
          </div>

          <div>
            <p className="mb-3 text-sm font-semibold">Neutral Color (Default)</p>
            <Tabs defaultValue="tab1" variant="bordered" activeColor="neutral">
              <Tab value="tab1" label="Standard" />
              <TabPanel value="tab1">
                <p className="text-sm">Active tab in neutral color (default styling).</p>
              </TabPanel>
              <Tab value="tab2" label="Regular" />
              <TabPanel value="tab2">
                <p className="text-sm">Neutral color for a clean, standard look.</p>
              </TabPanel>
              <Tab value="tab3" label="Basic" />
              <TabPanel value="tab3">
                <p className="text-sm">Neutral active tab color styling.</p>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </ShowcaseSection>
    </ComponentPage>
  );
}
