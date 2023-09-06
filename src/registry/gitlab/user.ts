
import { gitPost } from "@/registry/gitlab/request";
interface IToken {
  access_token: string
  token_type: string
  refresh_token: string
  scope: string
  created_at: number
}

/**
 * @description: 获取用户信息
 * @param {string} username
 * @param {string} password
 * @return {*}
 */
export const getToken = async (gitUrl: string, username: string, password: string): Promise<IToken> => {
  const token = await gitPost<IToken>({
    GIT_URL: gitUrl,
    url: '/oauth/token',
    params: {
      grant_type: 'password',
      username,
      password,
    }
  });
  return token
}