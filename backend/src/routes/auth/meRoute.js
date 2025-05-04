const express = require('express');
const router = express.Router();
const userController = require("../../controllers/UserController");
const { statusCodes } = require("../../constants/constants");
const { verifyAccessToken } = require('../../utils/auth');

/**
 * @swagger
 * /auth/me:
 *   get:
 *     summary: Get current user information
 *     tags: [Auth]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: User information retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 data:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                     firstName:
 *                       type: string
 *                     lastName:
 *                       type: string
 *                     username:
 *                       type: string
 *                     image:
 *                       type: string
 *                     email:
 *                       type: string
 *                     phone:
 *                       type: string
 *                     role:
 *                       type: string
 *                     refreshToken:
 *                       type: string
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *       400:
 *         description: Bad request - Access token is required
 *       401:
 *         description: Unauthorized - Invalid or expired token
 *       404:
 *         description: User not found
 *       500:
 *         description: Server error
 */
router.get('/me', async (req, res) => {
    try {
        const token = req.cookies.token;
        
        if (!token) {
            return res.status(statusCodes.BAD_REQUEST)
                .json({
                    message: "Access token is required",
                    error: "No token found in cookies"
                });
        }

        const decoded = verifyAccessToken(token);
        if (!decoded) {
            return res.status(statusCodes.UNAUTHORIZED)
                .json({ message: "Invalid or expired access token" });
        }

        const user = await userController.getUserExist(decoded.email);
        if (!user) {
            return res.status(statusCodes.NOT_FOUND)
                .json({ message: "User not found" });
        }

        // Return complete user information (excluding sensitive data like password)
        const userInfo = {
            _id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            username: user.username,
            image: user.image,
            email: user.email,
            phone: user.phone,
            role: user.role,
            refreshToken: user.refreshToken,
            createdAt: user.createdAt,
            __v: user.__v
        };

        return res.status(statusCodes.OK)
            .json({
                message: "User information retrieved successfully",
                data: userInfo
            });
    }
    catch (error) {
        console.error("Error in /me route:", error);
        return res.status(statusCodes.INTERNAL_SERVER_ERROR)
            .json({ 
                message: "Internal server error",
                error: error.message 
            });
    }
});

module.exports = router;