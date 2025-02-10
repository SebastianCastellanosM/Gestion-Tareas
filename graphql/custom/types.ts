import { userTypes } from './users/types';
import { projectTypes } from './projects/types';
import { taskTypes } from './tasks/types'; 

export const customTypes = `
  ${userTypes}
  ${projectTypes}
  ${taskTypes}  
`;