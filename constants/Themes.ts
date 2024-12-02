import { makeStyles } from '@rneui/themed';

export const useStyles = makeStyles((theme) => ({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginRight: 50,
  },
  sidebar: {
    borderRightWidth: 1,
    width: 50,
    gap: 10,
    paddingVertical: 10,
  },
  sidebarIcon: {
    cursor: 'pointer',
    padding: 10,
  },
  dashboard: {
    width: '100%',
    padding: 10,
    gap: 50,
  },
  dashboardListContainer: {
    borderWidth: 1,
  },
}));
