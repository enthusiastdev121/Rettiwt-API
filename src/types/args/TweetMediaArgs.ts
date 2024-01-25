/**
 * The arguments specifying the media to be posted in a single tweet.
 *
 * @public
 */
export interface ITweetMediaArgs {
	/** The path to the media file */
	path: string;

	/** The list usernames of users to be tagged in the media. */
	tags?: string[];
}
