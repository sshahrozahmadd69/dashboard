const { Router } = require('express');
const router = Router();
const {dashboardView, usersView, plansView, workspacesView, projectsView } = require('../controllers/dashboard.controller')
// const router = express.Router();
router.get('/index', dashboardView);
router.get('/users', usersView);
router.get('/plansView', plansView);
router.get('/workspacesView', workspacesView);
router.get('/projectsView', projectsView);

module.exports = router;
