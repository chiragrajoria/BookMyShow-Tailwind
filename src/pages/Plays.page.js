import React from "react";
import Poster from "../components/poster/poster.component";
import PlaysFilter from "../components/PlaysFilters/PlaysFilters.component";

const Plays = () => {
    return (
        <>
            <div className="container mx-auto px-4">
                <div className="w-full lg:flex lg:flex-row-reverse">
                    <div className="lg:w-8/12">
                    <h2 className="text-2xl font-bold mt-4 pl-4">Plays in Bhubaneswar</h2>
                    <div className="flex flex-wrap">
                        <div className="w-1/2 my-3 md:w-1/3 lg:w-1/4">
                            <Poster
                                src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyNiBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00314929-rernujftzc-portrait.jpg"
                                title="Many Faces of Korean Storytelling"
                                subtitle="English ₹ 455"
                            />
                        </div>
                        <div className="w-1/2 my-3 md:w-1/3 lg:w-1/4">
                            <Poster
                                src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxNiBPY3Q%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00315141-hqtfuzdtzu-portrait.jpg"
                                title="Dum Biryani"
                                subtitle="English ₹ 455"
                            />
                        </div>
                        <div className="w-1/2 my-3 md:w-1/3 lg:w-1/4">
                            <Poster
                                src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxNiBPY3Q%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00315141-hqtfuzdtzu-portrait.jpg"
                                title="Dum Biryani"
                                subtitle="English ₹ 455"
                            />
                        </div>
                        <div className="w-1/2 my-3 md:w-1/3 lg:w-1/4">
                            <Poster
                                src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyNiBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00314929-rernujftzc-portrait.jpg"
                                title="Many Faces of Korean Storytelling"
                                subtitle="English ₹ 455"
                            />
                        </div>


                        <div className="w-1/2 my-3 md:w-1/3 lg:w-1/4">
                            <Poster
                                src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyNiBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00314929-rernujftzc-portrait.jpg"
                                title="Many Faces of Korean Storytelling"
                                subtitle="English ₹ 455"
                            />
                        </div>
                        <div className="w-1/2 my-3 md:w-1/3 lg:w-1/4">
                            <Poster
                                src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxNiBPY3Q%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00315141-hqtfuzdtzu-portrait.jpg"
                                title="Dum Biryani"
                                subtitle="English ₹ 455"
                            />
                        </div>
                        <div className="w-1/2 my-3 md:w-1/3 lg:w-1/4">
                            <Poster
                                src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxNiBPY3Q%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00315141-hqtfuzdtzu-portrait.jpg"
                                title="Dum Biryani"
                                subtitle="English ₹ 455"
                            />
                        </div>
                        <div className="w-1/2 my-3 md:w-1/3 lg:w-1/4">
                            <Poster
                                src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxNiBPY3Q%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00315141-hqtfuzdtzu-portrait.jpg"
                                title="Dum Biryani"
                                subtitle="English ₹ 455"
                            />
                        </div>
                    </div>
                    </div>
                    <div className="lg:w-1/3 ">
                    <h2 className="text-2xl font-bold mt-4">Filter</h2>
                    <div>
                        <PlaysFilter/>
                    </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Plays;