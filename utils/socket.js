/**
 * script for creating a Socket.io connection instance
 */

import { io } from 'socket.io-client'

const URL = "https://pd2-ens.onrender.com"

export const socket = io(URL)

