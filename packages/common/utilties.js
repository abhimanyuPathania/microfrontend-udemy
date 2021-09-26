export const shouldSyncNavigation = ({ nextLocation, history }) => {
  const { pathname, search, hash } = nextLocation;
  return (
    history.location.pathname !== pathname ||
    history.location.hash !== hash ||
    history.location.search !== search
  );
};

export const syncNavigation = ({ nextLocation, nextMethod, history }) => {
  const { pathname, search, state, hash, key } = nextLocation;
  const navObject = { pathname, search, state, hash };
  switch (nextMethod) {
    case "PUSH":
      history.push(navObject);
      break;
    case "REPLACE":
      history.replace(navObject);
      break;
    case "POP": {
      /**
       ** Action 'POP' is dispatched on, both, `goForward` and `goBack`
       Unable to distinguish even on basis ok keys. Getting different
       unique key on pressing browser back.
       https://stackoverflow.com/questions/51825523/react-router-differentiate-goback-and-goforward-in-listen

       Using history push instead
      */
      history.push(navObject);
      break;
    }
    default:
      console.error("unknown navigation action");
  }
};
