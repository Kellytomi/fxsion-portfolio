# Build stage
FROM node:18-alpine AS build
WORKDIR /app

# Install dependencies with better error handling
COPY package.json package-lock.json* ./
# Use npm install instead of npm ci and add more verbosity
RUN npm install --loglevel verbose

# Copy source files
COPY . .

# Set environment variables
ENV NEXT_TELEMETRY_DISABLED=1

# Build the application
RUN npm run build

# Production stage
FROM node:18-alpine AS runner
WORKDIR /app

# Set environment variables
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Copy necessary files from build stage
COPY --from=build /app/next.config.js ./
COPY --from=build /app/public ./public
COPY --from=build /app/.next ./.next
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package.json ./package.json

# Expose the port
EXPOSE 3000

# Run the application
CMD ["npm", "start"] 