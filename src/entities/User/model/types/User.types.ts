export interface ICredentials {
	username: string;
	password: string;
}

export interface IUser {
	id: number,
	username: string,
	email: string,
	firstName: string,
	lastName: string,
	gender: string,
	image: string,
	accessToken: string,
	refreshToken: string,
}

export type ITokens = {
	accessToken: string,
	refreshToken: string,
};