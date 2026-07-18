export interface Surfboard {
    model: string;
    volume: number;
    lengthFt: number;
  }

  export interface UserProfile {
    weightKg: number;
    skillLevel: 1 | 2 | 3; // 1: Beginner, 2: Intermediate, 3: Advanced
    location?: string;
  }
  