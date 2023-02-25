export const Privileges = {
  Unrestricted: 1 << 0,
  Verified: 1 << 1,
  Whitelisted: 1 << 2,
  Supporter: 1 << 4,
  Premium: 1 << 5,
  Alumni: 1 << 7,
  TourneyManager: 1 << 10,
  Nominator: 1 << 11,
  Moderator: 1 << 12,
  Administrator: 1 << 13,
  Developer: 1 << 14,
  Donator: 1 << 4 | 1 << 5,
  Staff: 1 << 12 | 1 << 13 | 1 << 14
}