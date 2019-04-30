class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :meme_id, :user_id, :timestamp, :username, :rating, :comment

  def username
    object.user.username
  end

  def timestamp
    object.created_at.strftime("%B %e, %Y, %l:%M %P")
  end

end
