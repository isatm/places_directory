export class CreateReviewDto {
    placeId: string;
    user: string;
    rating: number;
    comment?: string;
  }