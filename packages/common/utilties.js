export const shouldSyncNavigation = ({ nextLocation, history }) => {
  const { pathname, search, hash } = nextLocation;
  return (
    history.location.pathname !== pathname ||
    history.location.hash !== hash ||
    history.location.search !== search
  );
};

export const syncNavigation = ({ nextLocation, nextMethod, history }) => {
  const { pathname, search, state, hash } = nextLocation;
  const navObject = { pathname, search, state, hash };
  switch (nextMethod) {
    case "PUSH":
      history.push(navObject);
      break;
    case "REPLACE":
      history.replace(navObject);
      break;
    case "POP":
      history.goBack();
      break;
    default:
      console.error("unknown navigation action");
  }
};
