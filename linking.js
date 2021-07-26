const config={
    screens:{
        Drawer : {
            path:"/:id",
            parse:{
                id:(id)=>`${id}`,
            }
        }
    }
}
const linking={
    prefixes:["https://subrata.website"],
    config,
};

export default linking;