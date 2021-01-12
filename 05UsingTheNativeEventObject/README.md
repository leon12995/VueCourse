1.DOM Interaction Templates & Data Binding
2.Event Handing;

Methods vs Computed Properties vs Watchers
Methods: Use with event bnding OR data binding
{
Data binding: Method is executed for every 'rerender' cycle of the componet
Use for events or data that really needs to be re-valuated all the time.
}
Computed:
{
Use with data binding;
Computed properties are only re-evaluated if one of their "used values changed
Use for data that depends on their data
}
Watch: {
Not use directly in template
Allows you to run any code in reaction to some changed data(e.g. send Http request etc.)
}
