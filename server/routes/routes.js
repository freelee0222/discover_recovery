const accountController = require('../controllers/accountController');
const meetingController = require('../controllers/meetingController');
const activityController = require('../controllers/activityController');
const authenticateToken = require('../helper/verifyJWT'); 

module.exports = (app) => {
    app.get('/api/members', accountController.getMembers);
    app.post('/api/login', accountController.login);
    app.get('/api/get-account', authenticateToken, accountController.getMember);
    app.post('/api/create-account', accountController.createAccount);
    app.put('/api/edit-account', accountController.editAccount);

    app.get('/api/meetings', meetingController.readMeetings);
    app.post('/api/create-meeting', meetingController.createMeeting);
    app.put('/api/update-meeting/:id', meetingController.updateMeeting);
    app.delete('/api/delete-meeting/:id', meetingController.deleteMeeting);

    app.get('/api/activities',activityController.readActivities);
    app.post('/api/create-activity', activityController.createActivity);
    app.put('/api/update-activity/:id', activityController.updateActivity);
    app.delete('/api/delete-activity/:id', activityController.deleteActivity);
}