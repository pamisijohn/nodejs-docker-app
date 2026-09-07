# Use an official lightweight Node.js image
FROM node:18-alpine

# Set working directory inside the container
WORKDIR /usr/src/app

# Copy package files first (better layer caching)
COPY package*.json ./

# Install only production dependencies
RUN npm install --production

# Copy the rest of the application code
COPY . .

# Document the port the app runs on
EXPOSE 3000

# Set environment variable (optional, matches app.js default)
ENV PORT=3000

# Start the application
CMD ["npm", "start"]
