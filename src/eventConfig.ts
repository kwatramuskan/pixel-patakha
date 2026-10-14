/** Update this file when official event details are confirmed. */
export const eventConfig = {
  registrationUrl: import.meta.env.VITE_REGISTRATION_URL || '',
  contactEmail: 'Add official contact email',
  socialLinks: [
    { label: 'Instagram', url: '' },
    { label: 'LinkedIn', url: '' },
    { label: 'Discord', url: '' },
  ],
  timeline: [
    { title: 'Team Registration', date: 'Date to be announced', number: '01' },
    { title: 'Design Submission', date: 'Date to be announced', number: '02' },
    { title: 'Judging & Review', date: 'Date to be announced', number: '03' },
    { title: 'Results Announcement', date: 'Date to be announced', number: '04' },
  ],
  rules: [
    { title: 'Who can enter?', text: 'Eligibility criteria to be confirmed by the organizers.', icon: '✳' },
    { title: 'Team size', text: 'Minimum and maximum team size to be announced.', icon: '▦' },
    { title: 'File formats', text: 'Accepted file types and size limits to be announced.', icon: '▤' },
    { title: 'Submission deadline', text: 'Official deadline to be announced. Check back for updates.', icon: '◷' },
    { title: 'Keep it original', text: 'Originality and permitted asset-use policy to be confirmed.', icon: '✦' },
    { title: 'Judging criteria', text: 'Final scoring rubric will be shared by the organizers.', icon: '◇' },
  ],
  prizes: [
    { place: 'FIRST PLACE', title: 'The Pixel Legend', reward: 'Prize & recognition details coming soon', rank: '01', tone: 'gold' },
    { place: 'SECOND PLACE', title: 'The Block Builder', reward: 'Prize & recognition details coming soon', rank: '02', tone: 'silver' },
    { place: 'THIRD PLACE', title: 'The Spark Starter', reward: 'Prize & recognition details coming soon', rank: '03', tone: 'bronze' },
  ],
}
