import { useEffect, useState } from "react";
import Cover from "../Components/Common/Cover";
import bannerBg from "../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import MenuSection from "../Components/OurMenu/MenuSection";

const OurShop = () => {
    const [tabIndex, setTabIndex] = useState(0);

    useEffect(() => {
        document.title = 'Our Shop || Bistro Boss Restaurant'
    }, []);

    return (
        <div className="-mt-[122px]">
            <Cover title="Our shop" subTitle="Would you like to try a dish?" bg={bannerBg} />

            <div className="w-10/12 mx-auto my-[130px]">
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>SALAD</Tab>
                        <Tab>PIZZA</Tab>
                        <Tab>SOUPS</Tab>
                        <Tab>DESSERTS</Tab>
                        <Tab>DRINKS</Tab>
                    </TabList>

                    <TabPanel>
                        <MenuSection categoryName="salad" />
                    </TabPanel>
                    <TabPanel>
                        <MenuSection categoryName="pizza" />
                    </TabPanel>
                    <TabPanel>
                        <MenuSection categoryName="soup" />
                    </TabPanel>
                    <TabPanel>
                        <MenuSection categoryName="dessert" />
                    </TabPanel>
                    <TabPanel>
                        <MenuSection categoryName="drinks" />
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default OurShop;