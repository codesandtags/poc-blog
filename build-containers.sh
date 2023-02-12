# Build all Docker containers

# Posts Service
echo "📦 Building Posts"
cd posts/
docker build -t codesandtags/posts:0.0.1 .
cd ..

# Comments Service
echo "📦 Building Comments"
cd comments/
docker build -t codesandtags/comments:0.0.1 .
cd ..


# Moderation Service
echo "📦 Building Moderation"
cd moderation/
docker build -t codesandtags/moderation:0.0.1 .
cd ..


# Query Service
echo "📦 Building Query"
cd query/
docker build -t codesandtags/query:0.0.1 .
cd ..


# Event Bus Service
echo "📦 Building Event Bus"
cd event-bus/
docker build -t codesandtags/event-bus:0.0.1 .
cd ..


# Client Web App
echo "📦 Building Client Web App"
cd client/
docker build -t codesandtags/client:0.0.1 .
cd ..

echo "Docker containers generated. 🍻"