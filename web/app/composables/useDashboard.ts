export const useDashboard = () => {
  const isNotificationsSlideoverOpen = useState('josp-notifications-open', () => false)
  return { isNotificationsSlideoverOpen }
}
