import React from "react";
import { Tabs, TabsHeader, TabsBody, Tab, TabPanel } from "@material-tailwind/react";


export default function Intro() {
    const [activeTab, setActiveTab] = React.useState("foranyone");
    const data = [
      {
        label: "For Anyone",
        value: "foranyone",
        desc: `It really matters and then like it really doesn't matter.
        What matters is the people who are sparked by it. And the people 
        who are like offended by it, it doesn't matter.`,
      },
      {
        label: "Recruiter",
        value: "recruiter",
        desc: `Because it's about motivating the doers. Because I'm here
        to follow my dreams and inspire other people to follow their dreams, too.`,
      },
      {
        label: "Developer",
        value: "developer",
        desc: `We're not always in the position that we want to be at.
        We're constantly growing. We're constantly making mistakes. We're
        constantly trying to express ourselves and actualize our dreams.`,
      },
      {
        label: "Client",
        value: "client",
        desc: `Because it's about motivating the doers. Because I'm here
        to follow my dreams and inspire other people to follow their dreams, too.`,
      },
    ];
    return (
        <div className="p-48">
            <Tabs value={activeTab}>
                <TabsHeader
                className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
                indicatorProps={{
                    className:
                    "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
                }}
                >
                {data.map(({ label, value }) => (
                    <Tab
                    key={value}
                    value={value}
                    onClick={() => setActiveTab(value)}
                    className={activeTab === value ? "text-gray-900" : ""}
                    >
                    {label}
                    </Tab>
                ))}
                </TabsHeader>
                <TabsBody>
                {data.map(({ value, desc }) => (
                    <TabPanel key={value} value={value} className="text-2xl">
                    {desc}
                    </TabPanel>
                ))}
                </TabsBody>
            </Tabs>
        </div>
    );
  }