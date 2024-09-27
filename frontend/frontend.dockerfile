# Use an official Node.js runtime as the base image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Next.js application
RUN npm run build

# Expose the ports that the application will run on and communicate with backend
EXPOSE 3000 4000

# Start the Next.js application in production mode
CMD ["npm", "run", "start"]
