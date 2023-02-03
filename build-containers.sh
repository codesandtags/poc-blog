# Build all Docker containers

# Posts Service
echo "📦 Building Posts"
cd posts/
docker build -t codesandtags/posts .
cd ..

# Comments Service
echo "📦 Building Comments"
cd comments/
docker build -t codesandtags/comments .
cd ..


# Moderation Service
echo "📦 Building Moderation"
cd moderation/
docker build -t codesandtags/moderation .
cd ..


# Query Service
echo "📦 Building Query"
cd query/
docker build -t codesandtags/query .
cd ..


# Event Bus Service
echo "📦 Building Event Bus"
cd event-bus/
docker build -t codesandtags/event-bus .
cd ..


# Client Web App
echo "📦 Building Client Web App"
cd client/
docker build -t codesandtags/client .
cd ..

echo "Docker containers generated. 🍻"