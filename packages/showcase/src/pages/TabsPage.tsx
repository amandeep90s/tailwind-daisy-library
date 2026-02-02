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
              <h3 className="font-bold mb-2">Account Settings</h3>
              <p>Manage your account information here.</p>
            </div>
          </TabPanel>
          <Tab value="tab2" label="Password" />
          <TabPanel value="tab2">
            <div className="bg-base-200 rounded-lg p-4">
              <h3 className="font-bold mb-2">Password Settings</h3>
              <p>Change your password and security settings.</p>
            </div>
          </TabPanel>
          <Tab value="tab3" label="Settings" />
          <TabPanel value="tab3">
            <div className="bg-base-200 rounded-lg p-4">
              <h3 className="font-bold mb-2">General Settings</h3>
              <p>Configure general application settings.</p>
            </div>
          </TabPanel>
        </Tabs>
      </ShowcaseSection>

      <ShowcaseSection title="Variants">
        <div className="space-y-6 w-full">
          <div>
            <p className="text-sm font-semibold mb-2">Bordered</p>
            <Tabs defaultValue="a" variant="bordered">
              <Tab value="a" label="Tab 1" />
              <TabPanel value="a">
                <p className="text-sm">
                  Content for Tab 1 with bordered variant.
                </p>
              </TabPanel>
              <Tab value="b" label="Tab 2" />
              <TabPanel value="b">
                <p className="text-sm">
                  Content for Tab 2 with bordered variant.
                </p>
              </TabPanel>
              <Tab value="c" label="Tab 3" />
              <TabPanel value="c">
                <p className="text-sm">
                  Content for Tab 3 with bordered variant.
                </p>
              </TabPanel>
            </Tabs>
          </div>
          <div>
            <p className="text-sm font-semibold mb-2">Lifted</p>
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
            <p className="text-sm font-semibold mb-2">Boxed</p>
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
        <div className="space-y-6 w-full">
          <div>
            <p className="text-sm font-semibold mb-2">Extra Small (xs)</p>
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
            <p className="text-sm font-semibold mb-2">Small (sm)</p>
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
            <p className="text-sm font-semibold mb-2">Medium (md) - Default</p>
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
            <p className="text-sm font-semibold mb-2">Large (lg)</p>
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
            <p className="text-sm font-semibold mb-2">Extra Large (xl)</p>
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
            <p className="text-sm">
              This content won't be accessible because the tab is disabled.
            </p>
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
        <div className="space-y-8 w-full">
          <div>
            <p className="text-sm font-semibold mb-3">Bordered with Content</p>
            <Tabs defaultValue="tab1" variant="bordered">
              <Tab value="tab1" label="Profile" />
              <TabPanel value="tab1">
                <div className="bg-base-200 p-6 rounded-lg">
                  <h4 className="text-lg font-bold mb-2">
                    Profile Information
                  </h4>
                  <p className="text-sm">View and edit your profile details.</p>
                </div>
              </TabPanel>
              <Tab value="tab2" label="Documents" />
              <TabPanel value="tab2">
                <div className="bg-base-200 p-6 rounded-lg">
                  <h4 className="text-lg font-bold mb-2">Your Documents</h4>
                  <p className="text-sm">Access all your uploaded documents.</p>
                </div>
              </TabPanel>
              <Tab value="tab3" label="Settings" />
              <TabPanel value="tab3">
                <div className="bg-base-200 p-6 rounded-lg">
                  <h4 className="text-lg font-bold mb-2">Settings Panel</h4>
                  <p className="text-sm">Configure your preferences.</p>
                </div>
              </TabPanel>
            </Tabs>
          </div>

          <div>
            <p className="text-sm font-semibold mb-3">Lifted with Content</p>
            <Tabs defaultValue="tab1" variant="lifted">
              <Tab value="tab1" label="Dashboard" />
              <TabPanel value="tab1">
                <div className="bg-base-200 p-6 rounded-lg">
                  <h4 className="text-lg font-bold mb-2">Dashboard Overview</h4>
                  <p className="text-sm">
                    View your dashboard metrics and insights.
                  </p>
                </div>
              </TabPanel>
              <Tab value="tab2" label="Analytics" />
              <TabPanel value="tab2">
                <div className="bg-base-200 p-6 rounded-lg">
                  <h4 className="text-lg font-bold mb-2">Analytics Data</h4>
                  <p className="text-sm">Detailed analytics and statistics.</p>
                </div>
              </TabPanel>
              <Tab value="tab3" label="Reports" />
              <TabPanel value="tab3">
                <div className="bg-base-200 p-6 rounded-lg">
                  <h4 className="text-lg font-bold mb-2">Report Generation</h4>
                  <p className="text-sm">Generate and download reports.</p>
                </div>
              </TabPanel>
            </Tabs>
          </div>

          <div>
            <p className="text-sm font-semibold mb-3">Boxed with Content</p>
            <Tabs defaultValue="tab1" variant="boxed">
              <Tab value="tab1" label="Overview" />
              <TabPanel value="tab1">
                <div className="bg-base-200 p-6 rounded-lg">
                  <h4 className="text-lg font-bold mb-2">Overview Section</h4>
                  <p className="text-sm">Quick overview of key information.</p>
                </div>
              </TabPanel>
              <Tab value="tab2" label="Details" />
              <TabPanel value="tab2">
                <div className="bg-base-200 p-6 rounded-lg">
                  <h4 className="text-lg font-bold mb-2">Detailed View</h4>
                  <p className="text-sm">
                    Comprehensive details and information.
                  </p>
                </div>
              </TabPanel>
              <Tab value="tab3" label="History" />
              <TabPanel value="tab3">
                <div className="bg-base-200 p-6 rounded-lg">
                  <h4 className="text-lg font-bold mb-2">History Log</h4>
                  <p className="text-sm">View historical data and changes.</p>
                </div>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Position Bottom">
        <div className="space-y-6 w-full">
          <div>
            <p className="text-sm font-semibold mb-3">Tabs at Bottom</p>
            <Tabs defaultValue="tab1" variant="lifted" position="bottom">
              <Tab value="tab1" label="First" />
              <TabPanel value="tab1">
                <div className="bg-base-200 p-6 rounded-lg">
                  <h4 className="text-lg font-bold mb-2">Content First</h4>
                  <p className="text-sm">
                    When tabs are at the bottom, content appears first.
                  </p>
                </div>
              </TabPanel>
              <Tab value="tab2" label="Second" />
              <TabPanel value="tab2">
                <div className="bg-base-200 p-6 rounded-lg">
                  <h4 className="text-lg font-bold mb-2">Second Panel</h4>
                  <p className="text-sm">This is the second tab content.</p>
                </div>
              </TabPanel>
              <Tab value="tab3" label="Third" />
              <TabPanel value="tab3">
                <div className="bg-base-200 p-6 rounded-lg">
                  <h4 className="text-lg font-bold mb-2">Third Panel</h4>
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
            <div className="bg-base-200 p-6 rounded-lg">
              <h4 className="text-lg font-bold mb-2">Live Content</h4>
              <p className="text-sm">Watch live streams and broadcasts.</p>
            </div>
          </TabPanel>
          <Tab value="laugh" label="😄 Laugh" />
          <TabPanel value="laugh">
            <div className="bg-base-200 p-6 rounded-lg">
              <h4 className="text-lg font-bold mb-2">Comedy Content</h4>
              <p className="text-sm">Enjoy funny videos and entertainment.</p>
            </div>
          </TabPanel>
          <Tab value="love" label="❤️ Love" />
          <TabPanel value="love">
            <div className="bg-base-200 p-6 rounded-lg">
              <h4 className="text-lg font-bold mb-2">Favorite Content</h4>
              <p className="text-sm">Your most loved and saved content.</p>
            </div>
          </TabPanel>
        </Tabs>
      </ShowcaseSection>

      <ShowcaseSection title="Custom Colors">
        <div className="space-y-6 w-full">
          <Tabs defaultValue="tab1" variant="lifted">
            <Tab
              value="tab1"
              label="Primary"
              className="[--tab-bg:hsl(var(--p))] [--tab-border-color:hsl(var(--p))]"
            />
            <TabPanel value="tab1">
              <div className="bg-primary text-primary-content p-6 rounded-lg">
                <h4 className="text-lg font-bold mb-2">Primary Theme</h4>
                <p className="text-sm">Content with primary color theme.</p>
              </div>
            </TabPanel>
            <Tab
              value="tab2"
              label="Secondary"
              className="[--tab-bg:hsl(var(--s))] [--tab-border-color:hsl(var(--s))]"
            />
            <TabPanel value="tab2">
              <div className="bg-secondary text-secondary-content p-6 rounded-lg">
                <h4 className="text-lg font-bold mb-2">Secondary Theme</h4>
                <p className="text-sm">Content with secondary color theme.</p>
              </div>
            </TabPanel>
            <Tab
              value="tab3"
              label="Accent"
              className="[--tab-bg:hsl(var(--a))] [--tab-border-color:hsl(var(--a))]"
            />
            <TabPanel value="tab3">
              <div className="bg-accent text-accent-content p-6 rounded-lg">
                <h4 className="text-lg font-bold mb-2">Accent Theme</h4>
                <p className="text-sm">Content with accent color theme.</p>
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </ShowcaseSection>
    </ComponentPage>
  );
}
