const query = require('../services/common/sql.json')
const SQL = require('../services/common/common-query.service')

//For Register Page
exports.dashboardView = async (req, res) => {
    res.render("index", {});
  };


  exports.usersView = async (req, res) => {
    try {
      const userData= await SQL.executeQuery(query.listUser, null)
      const totalAndActiveUsers = await SQL.executeQuery(query.totalAndActiveUsers, null)
      console.log("TotalUsers", totalAndActiveUsers);
      // console.log("User Data",userData);
      res.render("users", {userData, totalAndActiveUsers});
    } catch (error) {
      console.error("Error fetching users:", error);
      res.status(500).send("Internal Server Error");
    }
   
  };


  exports.plansView = async (req, res) => {
    const plansView = await SQL.executeQuery(query.plans, null)
    console.log(plansView);
    console.log("Data Retention:", plansView[0].limitDetails.data_retention.bug);
    res.render("plans", {plansView});
  };

  exports.workspacesView = async (req, res) => {
    const workspaceData = await SQL.executeQuery(query.workspaces, null)
    const activeAndInactiveWorkspaces = await SQL.executeQuery(query.activeAndInactiveWorkspaces, null)
    const totalbugs = await SQL.executeQuery(query.totalbugs, null)
    const totalCrashes = await SQL.executeQuery(query.totalCrashes, null)
    // console.log(activeandInactiveWorkspaces);
    // console.log(workspaceData);
    res.render("workspaces", {workspaceData , activeAndInactiveWorkspaces, totalbugs, totalCrashes});
  };
  exports.projectsView = async (req, res) => {
    const projectsData = await SQL.executeQuery(query.projects , null)
    const totalbugs = await SQL.executeQuery(query.totalbugs, null)
    const totalCrashes = await SQL.executeQuery(query.totalCrashes, null)
    const totalReviews = await SQL.executeQuery(query.totalreviews, null)
    // console.log("ProjectsData",projectsData);
    res.render("projects", {projectsData, totalbugs, totalCrashes, totalReviews});
  };
