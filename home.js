class Home
{
    constructor(core)
    {
        this.core = core;
        core.util.loadlib(this);
    }

    index()
    {
        var param = {

        };
        param["program"] = "nodekjs";
        this.load.view("home", param);
    }

    user(param1 = null)
    {
        if (param1)
        {
            this.core.res.write(param1);
        } else
        {
            this.core.res.write("no parameter");
        }

    }
}

module.exports = Home;