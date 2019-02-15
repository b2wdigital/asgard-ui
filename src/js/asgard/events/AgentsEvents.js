const SlaveEvents = {
  CHANGE: "AGENTS_EVENTS_CHANGE",
  REQUEST: "AGENTS_EVENTS_REQUEST",
  REQUEST_ERROR: "AGENTS_EVENTS_REQUEST_ERROR",
  REVERT: "AGENTS_EVENTS_REVERT",
  REVERT_ERROR: "AGENTS_EVENTS_REVERT_ERROR",
  // CONTINUE_MIGRATION_SUCCESS: "DEPLOYMENT_EVENTS_CONTINUE_MIGRATION_SUCCESS",
  // CONTINUE_MIGRATION_ERROR: "DEPLOYMENT_EVENTS_CONTINUE_MIGRATION_ERROR"
};

export default Object.freeze(SlaveEvents);
