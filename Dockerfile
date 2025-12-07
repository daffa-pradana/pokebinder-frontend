# -------------------
# BUILD STAGE
# -------------------
FROM node:22-slim AS build

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# Build optimized production bundle
RUN npm run build

# -------------------
# PRODUCTION STAGE (NGINX SERVER)
# -------------------
FROM nginx:stable-alpine

# Copy build output to nginx html folder
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
