import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css"; // Keep this for default styling

const Dashboard = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="hero py-5 bg-primary text-white flex flex-col">
        <div className="hero-content text-center">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-3xl lg:text-4xl font-bold">Dashboard</h1>
            <p className="py-4 text-center text-sm lg:text-lg mx-auto">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="w-full">
        <Tabs>
          {/* TabList: Tab buttons */}
          <TabList className="flex justify-center space-x-4 bg-primary pb-10">
            <Tab className="px-6 active:rounded-full  rounded-full py-3 text-lg font-semibold text-white cursor-pointer border-white border-[3px] ">
              Cart
            </Tab>
            <Tab className="px-6 py-3 active:rounded-full  rounded-full text-lg font-semibold text-white cursor-pointer   border-[3px] border-white">
              WishList
            </Tab>
          </TabList>

          {/* Tab Panels: Tab content */}
          <div className="bg-white text-black p-6 border-t-2 border-gray-200 rounded-b-lg">
            <TabPanel>
              <div className="flex justify-between">
                <div>
                  <h2 className="text-3xl font-semibold">Cart List</h2>
                </div>
                <div className="flex items-center gap-3">
                  <h2 className="text-xl font-semibold">Total Cost:</h2>
                  <button className="btn bg-transparent hover:bg-primary rounded-full border-primary hover:text-white btn-sm">
                    Sort by Price
                  </button>
                  <button className="btn bg-primary btn-sm hover:bg-black rounded-full text-white">
                    Purchase
                  </button>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <h2 className="text-3xl font-semibold">My WishList</h2>
              <p></p>
            </TabPanel>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
