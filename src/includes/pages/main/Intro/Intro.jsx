import React from "react";
import DOMPurify from 'dompurify';
import { Tabs, TabsHeader, TabsBody, Tab, TabPanel } from "@material-tailwind/react";
import './Intro.css';


export default function Intro() {
    const [activeTab, setActiveTab] = React.useState("foranyone");
    const data = [
      {
        label: "For Anyone",
        value: "foranyone",
        desc: `Hi, I'm Eldrich Jyuri S. Torcuator, a junior web developer eager to grow and contribute to the tech world. 
              I'm <span class="text-red-600 font-bold">passionate about coding, problem-solving,</span> and <span class="text-red-600 font-bold">creating impactful digital experiences.</span>
              <br/> 
              <br/> 
              You can explore my work and reach out to me--I'd love to connect!`,
      },
      {
        label: "Recruiter",
        value: "recruiter",
        desc: `Hello! I'm Eldrich Jyuri S. Torcuator, a passionate and 
              detail-oriented junior web developer. 
              A BSIT <del class="text-red-600 font-bold">student</del> graduate. I am adaptable and eager to learn new things
              to contribute creating <span class="text-red-600 font-bold">seamless, user-friendly</span> web experiences. 
              <br/> 
              <br/> 
              Feel free to get in touch--I'd love to discuss how can I add value to your team!`,
      },
      {
        label: "Developer",
        value: "developer",
        desc: `Hey there!
              I'm Eldrich Jyuri S. Torcuator, a junior web developer with passion for crafting clean and intuitive web applications. 
              As someone who thrives on collaboration && continuous learning, 
              I'm excited to connect with like-minded developers and contribute to impactful projects. 
              <br/> 
              <br/> 
              Feel free to check out my work, and let's chat about tech, code, or exciting opportunities to create something great together!`,
      },
      {
        label: "Client",
        value: "client",
        desc: `Hi there! I'm Eldrich Jyuri S. Torcuator, a junior web developer dedicated to creating websites and applications that solve real problems. 
              Whether it's designing a seamless user experience or optimizing performance, 
              I'm here to bring your ideas to life. 
              <br/> 
              <br/> 
              Let's collaborate to turn your vision into reality!
`,
      },
    ];
    return (
        <div className="p-10">
          <div className="w-8/12">
              <Tabs value={activeTab}>
                  <TabsHeader
                  className="rounded-none border-b border-white bg-transparent p-0"
                  indicatorProps={{
                    className:
                    "bg-transparent border-b-2 border-red-700 shadow-none rounded-none",
                  }}
                  >
                  {data.map(({ label, value }) => (
                    <Tab
                      key={value}
                      value={value}
                      onClick={() => setActiveTab(value)}
                      className={activeTab === value ? "text-red-700 font-bold text-sm font-montserrat" : " text-sm hover:text-red-500 font-semibold font-montserrat"}
                      >
                      {label}
                      </Tab>
                  ))}
                  </TabsHeader>
                  <TabsBody>
                  {data.map(({ value, desc }) => (
                    <TabPanel key={value} value={value} className="text-2xl font-montserrat font-medium" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(desc) }}>
                      </TabPanel>
                  ))}
                  </TabsBody>
              </Tabs>
          </div>
        </div>
    );
  }