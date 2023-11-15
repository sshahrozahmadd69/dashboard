const express = require("express")
const app = express()
const sql = require('./src/api/v1/services/common/common-query.service')
const pug = require("pug");
const router = require("./src/api/v1/routes/dashboard.route");
const path = require("path");

app.set("view engine", "pug");
app.set('views', path.join(__dirname, 'src', 'api', 'v1', 'views'));

app.use(express.json());
app.use("/", router);



app.use(express.static(path.join("./src/api/v1/public")));


const mysql = async() => {
  //  const users= await sql.executeQuery("select u.kuid, u.fullName, u.email, u.lastLogin, sp.packageTitle, sp.createdOn from fiv2_general.users u INNER JOIN fiv2_general.subscription_plans sp on u.subscriptionId = sp.subscriptionId")
//     console.log(query);
//  const plans= await sql.executeQuery("select sp.packageTitle AS PlaneName, sp.stripeProductId, sp.limits AS limitDetails, COUNT(u.kuid) AS Total_user_count, COUNT(sp.isActive) AS active_users from fiv2_general.users u  RIGHT JOIN fiv2_general.subscription_plans sp on u.subscriptionId = sp.subscriptionId GROUP BY sp.packageTitle", null)
// console.log("query2", query2);

//  const workspaces= await sql.executeQuery("SELECT  u.kuid AS ownerkuid , u.fullName AS ownername , ws.kuid AS worspacekuid , ws.workspaceTitle, COUNT(DISTINCT sr.memberKuid) AS membersCount,  sp.packageTitle AS PlanName,  sp.createdOn , COUNT(p.projectId) AS totalProjects FROM fiv2_general.users u  LEFT JOIN fiv2_general.workspaces ws  ON u.kuid  = ws.ownerKuid  LEFT JOIN fiv2_general.shared_resources sr ON u.kuid = sr.memberKuid LEFT JOIN fiv2_general.subscription_plans sp ON u.subscriptionId = sp.subscriptionId LEFT JOIN fiv2_general.projects p ON ws.kuid  = p.workspaceKuid GROUP BY u.kuid ; ", null)
 // console.log("query3",query3);


//  const projects= await sql.executeQuery("SELECT  u.kuid AS ownerName, u.fullName, ws.kuid AS workspace_Kuid, ws.workspaceTitle AS workspaceName,  p.kuid AS ProjectKuid, p.platformType AS ProjectType, p.createdAt, COUNT(DISTINCT sr.memberKuid) AS Total_Members FROM fiv2_general.users u  INNER JOIN fiv2_general.workspaces ws ON u.kuid = ws.ownerKuid   INNER JOIN fiv2_general.projects p ON u.kuid = p.ownerKuid  INNER JOIN fiv2_general.shared_resources sr ON u.kuid = sr.memberKuid GROUP BY u.kuid;  ")
//   console.log("query4",query4);



  // const totalissues = await sql.executeQuery("SELECT COUNT(*) AS Total_Issues FROM information_schema.tables WHERE table_schema = 'fiv2_crashes_collections'")
  // const totalCrashes = await sql.executeQuery("SELECT COUNT(*) AS Total_Crashes FROM information_schema.tables WHERE table_schema = 'fiv2_bugs_collections'")  
  // const totalreviews = await sql.executeQuery("SELECT COUNT(*) AS Total_Reviews FROM information_schema.tables WHERE table_schema = 'fiv2_customerfeedback_collections'")  

}

mysql()

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
