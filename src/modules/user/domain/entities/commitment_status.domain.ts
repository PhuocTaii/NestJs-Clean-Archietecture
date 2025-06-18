export enum CommitmentStatus {
  ISSUE = 'Issue',
  POTENTIAL_ISSUE = 'Potential Issue',
  GOOD = 'Good',
  OPPORTUNITY = 'Opportunity',
  EXCELLENT = 'Excellent',
}

export function getUserCommitmentStatus(
  point: number,
): Promise<CommitmentStatus> {
  if (point < 40) {
    return Promise.resolve(CommitmentStatus.ISSUE);
  } else if (point < 45) {
    return Promise.resolve(CommitmentStatus.POTENTIAL_ISSUE);
  } else if (point < 50) {
    return Promise.resolve(CommitmentStatus.GOOD);
  } else if (point < 55) {
    return Promise.resolve(CommitmentStatus.OPPORTUNITY);
  } else if (point >= 55) {
    return Promise.resolve(CommitmentStatus.EXCELLENT);
  } else {
    return Promise.reject(new Error('Invalid point value'));
  }
}
