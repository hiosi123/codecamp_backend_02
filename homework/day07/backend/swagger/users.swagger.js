/**
 * @openapi
 * /users:
 *   get:
 *      summary: 주문한 사람 정보 가져오기
 *      tags: [Board]
 *      responses:
 *          200:
 *              description: 성공
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              type: object
 *                              properties:
 *                                  email:
 *	                                    type: string
 *	                                    example: hiosi@naver.com
 *                                  name:
 *	                                    type: string
 *	                                    example: Simon
 *                                  phone:
 *                                      type: string
 *                                      example: 01020311883
 *                                  personal:
 *                                      type: string
 *                                      example: 999999-9999999
 *                                  prefer:
 *                                      type: string
 *                                      example: www.google.com
 * 
 */                                