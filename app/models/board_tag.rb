class BoardTag < ActiveRecord::Base
  belongs_to :board
  belongs_to :tag

end
