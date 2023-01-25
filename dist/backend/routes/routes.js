class RootRoutes {
    constructor(routes) {
        this.routes = routes;
        this.Routes = routes.CreateRoutes();
    }
    CreateRoutes() {
        return this.Routes;
    }
}
export { RootRoutes };
