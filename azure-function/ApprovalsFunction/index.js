const azure = require('azure-functions-node');
const msrest = require('@azure/ms-rest-nodeauth');
const notification = require('./notification'); // your own wrapper

module.exports = async function (context, req) {
  const { namespace, requester } = req.body;

  // TODO: lookup manager(s) via AAD Graph
  const approvers = await getApproversFor(requester);

  // Send notification email/request via Logic Apps or SendGrid
  await notification.sendApprovalRequest({
    to: approvers,
    subject: `AKS Namespace Provisioning: ${namespace}`,
    body: `Please review and approve namespace '${namespace}'. Reply +1 to proceed.`,
  });

  context.res = { status: 202, body: 'Approval request sent.' };
};
