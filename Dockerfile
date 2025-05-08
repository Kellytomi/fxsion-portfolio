FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm ci

# Copy the rest of the application
COPY . .

# Set environment variables
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Add a script to capture and display build errors
RUN echo "#!/bin/sh\nnpm run build > build.log 2>&1\nif [ \$? -ne 0 ]; then\n  echo '=== BUILD FAILED ==='\n  cat build.log\n  exit 1\nfi" > /app/build.sh && \
    chmod +x /app/build.sh

# Run the build script
RUN /app/build.sh

# Expose the port
EXPOSE 3000

# Start the application
CMD ["npm", "start"] 